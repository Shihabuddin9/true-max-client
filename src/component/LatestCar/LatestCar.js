import React from 'react';

const LatestCar = (props) => {
    const { internationa, name, body, img } = props.latestCar
    return (
        <div className='mx-2.5 shadow my-6 md:my-0'>
            <img className='w-60 h-32 mx-auto' src={img} alt="" />
            <div className='mt-5 mx-4'>
                <p className='text-orange-500 text-xs font-medium'>{internationa}</p>
                <h1 className='text-gray-900 font-medium text-base mt-1.5 mb-3'>{name}</h1>
                <p className='text-sm text-gray-600'>{body}</p>
                <button className='text-base py-7 hover:text-gray-600'>Read More..</button>
            </div>

        </div>
    );
};

export default LatestCar;