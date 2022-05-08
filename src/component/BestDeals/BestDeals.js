import React, { useEffect, useState } from 'react';
import BestDeal from '../BestDeal/BestDeal';

const BestDeals = () => {
    const [bestDeals, setBestDeals] = useState([])
    useEffect(() => {
        fetch('https://warm-wildwood-23363.herokuapp.com/viewCar')
            .then(res => res.json())
            .then(data => setBestDeals(data))
    }, [])
    return (
        <section id='bestDeals' className='text-center mb-12'>
            <p className='text-sm text-orange-500 font-medium'>LATEST SUBMISSION</p>
            <h1 className='mt-2 md:text-4xl text-3xl font-semibold text-gray-800'>Find the Best Deals For You</h1>

            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-6 gap-x-2 md:gap-y-8 gap-y-6 md:mx-6 mx-1 md:mt-12 mt-6'>
                {
                    bestDeals.map(bestDeal => <BestDeal
                        key={bestDeal._id}
                        bestDeal={bestDeal}
                    ></BestDeal>)
                }
            </div>
        </section>
    );
};

export default BestDeals;