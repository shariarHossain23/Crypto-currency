import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
       <div className='md:px-16 py-8'>
          <div className='flex flex-col items-center justify-center h-[80vh]'>
          <h1 className='md:text-4xl font-mono'>Welcome to CRYPTO Currency</h1>
           <Link to='/coins' className='bg-sky-700 px-3 py-1 rounded-full text-white mt-2 text-sm'>Explore coins</Link>
          </div>
       </div>
    );
};

export default Home;