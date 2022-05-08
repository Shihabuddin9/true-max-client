import React, { useEffect, useState } from 'react';
import LatestCar from '../LatestCar/LatestCar';

const LatestCars = () => {
    const [latestCars, setLatestCars] = useState([])
    useEffect(() => {
        fetch('https://warm-wildwood-23363.herokuapp.com/LatestCar')
            .then(res => res.json())
            .then(data => setLatestCars(data))
    }, [])
    return (
        <div className='md:mb-14 mb-12'>
            <p className='text-center text-sm font-medium text-orange-500'>LATEST PUBLISHED</p>
            <h1 className='text-center md:text-4xl text-3xl text-gray-700 mb-9 font-medium'>Upcomming Cars And Events</h1>
            <div className='md:flex mx-5'>
                {
                    latestCars.map(latestCar => <LatestCar
                        key={latestCar.id}
                        latestCar={latestCar}
                    ></LatestCar>)
                }
            </div>
        </div>
    );
};

export default LatestCars;