import React from 'react';
import CustomLink from '../customlink/Customlink';

const Header = () => {
    return (
        <div className='text-gray-600'>
            <CustomLink to='/'>Home</CustomLink>
        </div>
    );
};

export default Header;