import React from 'react';
import './TrustedDealer.css'

const TrustedDealer = (props) => {
    const { img, name, listing, phone, address } = props.trustedDealer
    return (
        <div className='border relative h-64 cursor-pointer trusted-shadow duration-500'>
            < img className='trusted-img-align' src={img} alt="" />

            <div className='absolute bottom-0 text-buttom text-left border-t w-full'>
                <div className='ml-3 pb-3'>
                    < p className='font-medium text-gray-900 mt-1.5 mb-0.5' > {name}</p >
                    <p className='text-gray-500 text-sm'>{address}</p>
                    <p className='my-2 text-gray-500 text-sm'>Total Listings: {listing}</p>
                    <p className='text-gray-500 text-sm'>{phone}</p>
                </div>
            </div>
        </div >
    );
};

export default TrustedDealer;