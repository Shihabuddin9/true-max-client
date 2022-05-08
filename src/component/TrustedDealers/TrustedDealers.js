import React, { useEffect, useState } from 'react';
import TrustedDealer from '../TrustedDealer/TrustedDealer';

const TrustedDealers = () => {
    const [trustedDealers, setTrustedDealers] = useState([])
    useEffect(() => {
        fetch('https://warm-wildwood-23363.herokuapp.com/TrustedDealers')
            .then(res => res.json())
            .then(data => setTrustedDealers(data))
    }, [])
    return (
        <div className='text-center md:mt-20'>
            <p className='text-orange-400 font-medium'>TRUSTED DEALERS</p>
            <h1 className='md:text-4xl text-2xl text-gray-700 font-medium'>Best Dealers In Town</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-x-2 md:gap-y-8 gap-y-6 md:mx-6 mx-1 md:mt-12 mt-6'>
                {
                    trustedDealers.map(trustedDealer => <TrustedDealer
                        key={trustedDealers.id}
                        trustedDealer={trustedDealer}
                    ></TrustedDealer>)
                }
            </div>
        </div>
    );
};

export default TrustedDealers;