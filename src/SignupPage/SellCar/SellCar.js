import React from 'react';
import { Link } from 'react-router-dom';
import './SellCar.css'

const SellCar = () => {
    return (
        <div className='sell-car pt-20 mb-7 w-full'>
            <div className='text-center text-white md:mt-6 mt-2'>
                <p className='font-medium md:text-xl text-sm'>Ride your own car</p>
                <h1 className='mt-2 font-medium md:text-4xl text-2xl'>Thousands Of Used</h1>
                <h1 className='font-medium md:text-4xl text-2xl'>Cars For Sale In Town</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center mx-14 md:mx-0 mt-6'>
                <Link to="/addBestDealsCar"><button className='bg-orange-600 hover:bg-orange-700 duration-500 text-white px-3 py-2'>Sell Your Car Today</button></Link>
                <small className='md:mx-3 my-3 md:my-0 '></small>
                <button className='bg-white hover:bg-gray-300  px-3 py-2 text-gray-800 hover:text-gray-700 md:w-1/6 font-medium'>Search Cars</button>
            </div>
        </div>
    );
};

export default SellCar;