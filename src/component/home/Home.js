import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='flex justify-between px-12 py-4 bg-white shadow-lg sticky top-0'>
            <div>
                <h3 className='text-sm bold font-bold text-gray-600'>Crypto Cafe</h3>
            </div>
            <div>
                <Header></Header>
            </div>
        </div>
    );
};

export default Home;