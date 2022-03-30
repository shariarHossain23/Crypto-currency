import React from 'react';
import CustomLink from '../customlink/Customlink';

const Header = () => {
    return (
        <div className='flex justify-between items-center shadow-xl px-6 py-6 sticky top-0'>
            <div>
                <h2 className='text-gray-600 text-2xl font-bold'>Crypto Currency</h2>
            </div>
            <div className='flex gap-4 text-gray-600'>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='coins'>Coins</CustomLink>
            <CustomLink to='contact'>Contact</CustomLink>
            </div>
        </div>
    );
};

export default Header;