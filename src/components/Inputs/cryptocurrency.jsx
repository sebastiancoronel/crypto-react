import React, {useEffect,useState} from "react";
import api from '../../api/api.js'

const cryptoCurrency = ({ setCrypto }) => {

    useEffect( () => {
        const fetch = async () => {
            const response = await api.getCoins();
            setCoin(response.Data);
        }
        fetch();
    },[]);

    const [coin, setCoin] = useState([]);

    return(
        <>              
            <select className='rounded-2xl bg-gray-500 text-xl p-2' onChange={(value)=>setCrypto(value)} type="text" placeholder="Select a coin">
                <option value="">Select a coin</option>
            {
                coin.map( (item)=>{
                    return(
                            <option key={item.CoinInfo.Name} value={item.CoinInfo.Name}> {item.CoinInfo.FullName} </option>
                            )
                        } )
            }
            
            </select>
        </>
    )
}

export default cryptoCurrency;