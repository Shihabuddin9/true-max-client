import React, { useEffect, useState } from 'react';
import BodyType from '../BodyType/BodyType';

const BodyTypes = () => {
    const [bodyTypes, setBodyTypes] = useState([])
    useEffect(() => {
        fetch('https://warm-wildwood-23363.herokuapp.com/bodyTypeCar')
            .then(res => res.json())
            .then(data => setBodyTypes(data))
    }, [])
    return (
        <div className='text-center md:mt-20 mt-12'>
            <p className='text-orange-400 font-medium'>LOOKING MORE!</p>
            <h1 className='md:text-4xl text-2xl text-gray-700 font-medium'>Explore By Body Type</h1>
            <div className='flex justify-center items-center flex-wrap mx-1 md:mt-7 mt-6'>
                {
                    bodyTypes.map(bodyType => <BodyType
                        key={bodyType.id}
                        bodyType={bodyType}
                    ></BodyType>)
                }
            </div>
        </div>
    );
};

export default BodyTypes;