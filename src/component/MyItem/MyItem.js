import React from 'react';

const MyItem = (props) => {
    const { img, name, country, price, transmission, drive, mileage, engine, wd, mi, listed, offer, use } = props.myItem
    return (
        <div>
            <div className=' mb-9'>
                <div className='border relative mx-2 md:mx-0'>
                    <div className='mt-3'>
                        <img className='mx-auto bestdeal-img px-2 md:px-0' src={img} alt="" />
                    </div>
                    <div className='text-left ml-2.5'>
                        <small className='text-gray-600'>{country}</small>
                        <h1 className='text-lg font-medium text-gray-900 hover:text-orange-600 cursor-pointer'>{name}</h1>
                        <p className='text-lg font-medium text-orange-600'>${price}</p>
                    </div>
                    <hr className='mx-3 mt-3 mb-2' />
                    <div className=''>
                        <div className='ml-2'>
                            <small className='text-gray-600'>{transmission}</small>
                            <small className='mx-5 text-gray-600'>{drive}</small>
                            <small className='text-gray-600'>{mileage}</small>
                        </div>
                        <div className='flex justify-around mt-3'>
                            <p className='text-xs font-medium'>{engine}</p>
                            <p className='text-xs font-medium px-9 md:px-0'>{wd}</p>
                            <p className='text-xs font-medium'>{mi}(mi)</p>
                        </div>
                    </div>
                    <p className='text-left ml-3 pb-2 mt-2 mb-1'><span className='text-xs text-gray-600'>Listed by:</span> <span className='text-sm font-medium text-gray-800'>{listed}</span></p>

                    <div className='absolute top-5 left-6'>
                        <small className='mr-2 bg-sky-600 px-1.5 py-0.5 text-white cursor-pointer'>{offer}</small>
                        <small className='bg-violet-700	px-1.5 py-0.5 text-white cursor-pointer'>{use}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItem;