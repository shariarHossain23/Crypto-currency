import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Carddetail = () => {
    const {coinId} = useParams()
    const [coin,setCoin] = useState({})
    useEffect(()=>{
        const url = `https://api.coingecko.com/api/v3/coins/${coinId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCoin(data))
    },[coinId])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl'>
           <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-center md:justify-around content-center'>
           <div className='order-2 md:order-1 content-center'>
                <h2 className='text-2xl'>General Info:</h2>
                <hr />
                <h1>Name:{coin.name}</h1>
                <h1>Market cap rank :{coin.market_cap_rank}</h1>
                <h1>Origin: {coin.country_origin ?coin.country_origin : 'not Available'}</h1>
                <h1>Algorithm :{coin.hashing_algorithm}</h1>
                <h1>Genesis date :{coin.genesis_date}</h1>
                <h1>Last update :{coin.last_updated}</h1>
                <h2 className='text-2xl mt-6'>Score</h2>
                <hr />
                <h1>Community score :{coin.community_score}</h1>
                <h1>Developer score :{coin.developer_score}</h1>
                <h1>Liquality score :{coin.liquidity_score}</h1>
                <h1>public interest score :{coin.public_interest_score}</h1>
            </div>
            <div className='flex justify-center order-1 md:order-2'>
                <img src={coin.image?.large} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Carddetail;