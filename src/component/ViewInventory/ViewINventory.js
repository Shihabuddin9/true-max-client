import React from 'react';
import { Link } from 'react-router-dom';
import './ViewINventory.css'

const ViewINventory = () => {
    return (
        <div className='view-inventory md:my-20 my-12 relative mx-2 md:mx-0'>
            <div className='text-center md:pt-20 pt-10 mb-8'>
                <p className='text-orange-600 font-medium mb-1'>WE ARE SINCE 1970</p>
                <h1 className='text-white font-semibold md:text-5xl text-2xl mb-3'>Buy Your Car Quickly And Easily</h1>

                <p className='text-white font-medium'>We believe in making simple and fair pricing plans. Choose your</p>
                <p className='text-white font-medium'>next successful plan and get started today!.</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center mx-14 md:mx-0'>
                <Link to="/inventory"><button className='bg-orange-500 hover:bg-orange-700 duration-500 text-white px-3 py-2 w-fit'>View Inventory</button></Link>
                <small className='md:mx-3 my-3 md:my-0 '></small>
                <Link to="/addBestDealsCar"><button className='bg-white hover:bg-gray-300  px-3 py-2 text-gray-800 hover:text-gray-700 font-medium'> sell Your Cars.. </button></Link>
            </div>
        </div>
    );
};

export default ViewINventory;