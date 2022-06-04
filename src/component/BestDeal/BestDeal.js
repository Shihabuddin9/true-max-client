import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BestDeal.css'

const BestDeal = (props) => {
    const { img, name, country, price, transmission, drive, mileage, engine, wd, mi, listed, offer, use, _id } = props.bestDeal

    const navigate = useNavigate();
    const handleBestDealDetails = () => {
        const path = `/bestDeal/${_id}`
        navigate(path)
    }
    return (
        <section className='border relative'>
            <div className='mt-3'>
                <img className='mx-auto bestdeal-img px-2 md:px-0' src={img} alt="" />
            </div>
            <div className='text-left ml-2.5'>
                <small className='text-gray-600'>{country}</small>
                <h1 className='text-lg font-medium text-gray-900 hover:text-orange-600 cursor-pointer'>{name.slice(0, 20)}</h1>
                <p className='text-lg font-medium text-orange-600'>${price}</p>
            </div>
            <hr className='mx-3 mt-3 mb-2' />
            <div>
                <div>
                    <small className='text-gray-600'>{transmission}</small>
                    <small className='lg:mx-10 md:mx-5 mx-10 text-gray-600'>{drive}</small>
                    <small className='text-gray-600'>{mileage}</small>
                </div>
                <div className='flex justify-around mt-3'>
                    <p className='text-xs font-medium'>{engine}</p>
                    <p className='text-xs font-medium md:px-6 px-0'>{wd}</p>
                    <p className='text-xs font-medium'>{mi}(mi)</p>
                </div>
            </div>
            <button onClick={handleBestDealDetails} className='mt-5 mb-2 bg-gray-700 hover:bg-orange-600 md:px-16 bestdeal-btn py-2.5 text-white duration-500 text-sm'>View Details</button>

            <p className='text-left ml-2 pb-2'><span className='text-xs text-gray-600'>Listed by:</span> <span className='text-sm font-medium text-gray-800'>{listed}</span></p>
            <div className='absolute top-5 left-6'>
                <small className='mr-2 bg-sky-600 px-1.5 py-0.5 text-white cursor-pointer'>{offer}</small>
                <small className='bg-violet-700	px-1.5 py-0.5 text-white cursor-pointer'>{use}</small>
            </div>
        </section>
    );
};

export default BestDeal;