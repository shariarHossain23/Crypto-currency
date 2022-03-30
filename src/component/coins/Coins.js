import React, { useEffect, useState } from 'react';
import Coin from '../Coin/Coin';
import Spinner from '../spinner/Spiner';

const Coins = () => {
    const [coins,setCoins] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => res.json())
        .then(data => setCoins(data))
        setLoading(false)
    },[])
    return (
       <>{ loading ? (<Spinner/>):(
        <div className='px-4 pt-20 pb-24 mx-auto md:px-2'>
        <div className='text-center mb-6'>
        <h2 className='text-2xl'>Available Crypto Currencies</h2>
        <p className='text-2xl'>Total coins {coins.length}</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            {
                coins.map(coin => <Coin key={coin.id} coin={coin}></Coin>)
            }
        </div>
    </div>
       )
       }
       </>
    );
};

export default Coins;