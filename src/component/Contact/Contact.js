import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Contact = () => {
    let navigate = useNavigate()
    return (
        <div className='mt-12'>
            <h1 className='text-xs md:text-4xl text-center font-mono'>Contact Us, Our Office Address Down Below</h1>
            <div className='text-center mt-12'>
            <button className='bg-sky-900 px-4 py-2 text-white mx-4'>BD Address</button>
            <button className='bg-sky-900 px-4 py-2 text-white'>Us Address</button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;