import './App.css'
import { useState } from 'react'
import GetPriceButton from './components/Buttons/seePrices.jsx'
import InputCurrency from './components/Inputs/currency.jsx'
import CryptoCurrency from './components/Inputs/cryptocurrency.jsx'
import Alert from './components/alerts/alert.jsx'
import Spinner from './components/spinners/spinner.jsx'
import Prices from './components/prices.jsx'
import api from './api/api.js'

function App() {

  const [crypto,setCrypto] = useState('');
  const [currency, setCurrency] = useState('');
  const [price,setPrice] = useState('');
  const [highday,sethighday] = useState('');
  const [lowday,setlowday] = useState('');
  const [alert,setAlert] = useState(false);
  const alertMessage = 'All fields must be selected';
  const [loader, setLoader] = useState(false);

  const getPrice = async () => {
    const crypto_value = crypto ? crypto.target.value : '';
    const currency_value = currency ? currency.target.value : '';

    if (crypto_value === '' || currency_value === '') {
      setAlert(true);
      return;
    }else{
      setAlert(false);
    }

    try {
      
      setLoader(true);
      const response = await api.getPrices(crypto.target.value, currency.target.value);
      let price = response.DISPLAY[crypto.target.value][currency.target.value].PRICE
      let highday = response.DISPLAY[crypto.target.value][currency.target.value].HIGHDAY
      let lowday = response.DISPLAY[crypto.target.value][currency.target.value].LOWDAY

      
      price = price.split(' ')
      price = price.pop();
      
      highday = highday.split(' ')
      highday = highday.pop()
      
      lowday = lowday.split(' ')
      lowday = lowday.pop();
      
      setPrice(price)
      sethighday(highday);
      setlowday(lowday);

    } catch (error) {
      console.error('Error fetching prices:', error);
    }
    setLoader(false);
  };
  
  return (
    <>
        {
          alert ? <Alert message={alertMessage} /> : ''
        }
    <div className='flex justify-end'>
      <div className="flex flex-col">
        <h1 className='text-emerald-500 font-bold my-4'>Crypto prices</h1>
        <div className=' flex flex-col bg-white rounded-2xl p-6'>
          <div className='flex flex-col gap-4'>
            <InputCurrency setCurrency={setCurrency} />
            <CryptoCurrency setCrypto={setCrypto} />
            <GetPriceButton getPrice={getPrice} />
          </div>
        </div>
        
        <div className='mt-40'>
          {loader?<Spinner/>:''}
          {price !=='' && loader === false ?<Prices price={price} highday={highday} lowday={lowday} />:''}
        </div>
      </div>
    </div>

    <div className='fixed bottom-0 right-0 mr-48 mb-5 '>
      <a className='absolute bottom-0 text-lg text-blue-200 underline' target='_blank' href="https://github.com/sebastiancoronel/crypto-react">Github</a>
    </div>
      
    </>
  )
}

export default App
