import React from 'react';

const Coin = ({coin}) => {
    console.log(coin);
    const {image,name,symbol} = coin
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p><small>{symbol}</small></p>
            </div>
        </div>
    );
};

export default Coin;