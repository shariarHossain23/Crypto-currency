import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  
    return (
        <div className='mt-12'>
            <h1 className='text-xs md:text-4xl text-center font-mono'>Contact Us, Our Office Address Down Below</h1>
            
           <div className='text-center mt-12'>
           <Link className='bg-sky-900 text-white mx-4 px-4 py-2' to='bd-address'>
                Bd address
            </Link>
            <Link className='bg-sky-900 text-white mx-4 px-4 py-2' to='us-address'>
                Us Address
            </Link>
           </div>
            <div className='text-center mt-24'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;