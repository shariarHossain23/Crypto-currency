import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({coin}) => {
    console.log(coin);
    const {image,name,symbol,id} = coin
    return (
        <div className='rounded-2xl shadow-lg w-[200px]'>
           <Link to= {`/coin-details/${id}`}>
           <div className='flex justify-between items-center p-4'>
           <div>
                <img className='w-16 h-16 object-cover mx-auto' src={image} alt="" />
            </div>
            <div className='flex flex-col mt-auto mb-auto'>
                <p className='text-sm'>{name}</p>
                <p><small>{symbol}</small></p>
            </div>
           </div>
           </Link>
        </div>
    );
};

export default Coin;