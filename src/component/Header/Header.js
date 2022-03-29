import React from 'react';
import CustomLink from '../customlink/Customlink';

const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-lg px-6 py-4'>
            <div>
                <h2 className='text-gray-600'>Crypto Currency</h2>
            </div>
            <div className='flex gap-4 text-gray-600'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='coins'>Coins</CustomLink>
            </div>
        </div>
    );
};

export default Header;