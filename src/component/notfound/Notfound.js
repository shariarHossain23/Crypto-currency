import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='text-center mt-48'>
            <h2>404 not found</h2>
            <h1 className='text-4xl my-4'>Oops! The page you're looking for isn't here.</h1>
            <p>You might have the wrong address, or the page may have moved.</p>
            <div className='mt-5'>
                <Link className='bg-sky-900 text-white px-4 py-2 mx-2' to='/'>Go Home</Link>
                <Link  className='bg-sky-900 text-white px-4 py-2' to='/contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Notfound;