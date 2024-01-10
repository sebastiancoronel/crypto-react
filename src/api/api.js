const COINS_URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

const api = {
    
    getCoins : async () => {
    
        const response = await fetch(COINS_URL)
        const coins = await response.json();
        return coins;
        
    },

    getPrices : async (crypto,currency) => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

}

export default api;