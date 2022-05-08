import React from 'react';
import useManageServices from '../../hooks/UseManageServices/UseManageServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import PageTitle from '../../hooks/PageTitle/PageTitle';

const ManageServices = (props) => {
    const [bestDeals, setBestDeals] = useManageServices();


    const handleDelete = id => {
        const wroning = window.confirm('Are you sure?')
        if (wroning) {
            const url = `https://warm-wildwood-23363.herokuapp.com/viewCar/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = bestDeals.filter(bestDeal => bestDeal._id !== id)
                        setBestDeals(remaining)
                    }
                })
        }
    }

    return (
        <div className='md:my-28 mt-20 mb-12'>
            <PageTitle title="MNAGE ITEMS"></PageTitle>
            <div>
                <h1 className='text-3xl font-medium text-center'>Manage Your Products</h1>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-6 gap-x-2 md:gap-y-8 gap-y-6 md:mx-6 mx-1 md:mt-12 mt-6'>
                {
                    bestDeals.map(bestDeal => <div key={bestDeal._id}>
                        <div>
                            <div className='border relative'>
                                <div className='mt-3'>
                                    <img className='mx-auto bestdeal-img px-2 md:px-0' src={bestDeal.img} alt="" />
                                </div>
                                <div className='text-left ml-2.5'>
                                    <small className='text-gray-600'>{bestDeal.country}</small>
                                    <h1 className='text-lg font-medium text-gray-900 hover:text-orange-600 cursor-pointer'>{bestDeal.name.slice(0, 20)}</h1>
                                    <p className='text-lg font-medium text-orange-600'>${bestDeal.price}</p>
                                </div>
                                <hr className='mx-3 mt-3 mb-2' />
                                <div className='ml-2'>
                                    <div>
                                        <small className='text-gray-600'>{bestDeal.transmission}</small>
                                        <small className='md:mx-3 mx-9 text-gray-600'>{bestDeal.drive}</small>
                                        <small className='text-gray-600'>{bestDeal.mileage}</small>
                                    </div>
                                    <div className='flex justify-around mt-3'>
                                        <p className='text-xs font-medium'>{bestDeal.engine}</p>
                                        <p className='text-xs font-medium px-9 md:px-0'>{bestDeal.wd}</p>
                                        <p className='text-xs font-medium'>{bestDeal.mi}(mi)</p>
                                    </div>
                                </div>
                                <p className='text-left ml-2 pb-2 mt-2 mb-1'><span className='text-xs text-gray-600'>Listed by:</span> <span className='text-sm font-medium text-gray-800'>{bestDeal.listed}</span></p>

                                <div className='ml-2 pb-2'>
                                    <div className='text-right'>
                                        <Link to={`/update/${bestDeal._id}`}><button className='border border-slate-300 px-1 text-xs' >Update</button></Link>
                                        <button title='delete' onClick={() => handleDelete(bestDeal._id)} className='inline-block mx-2' ><FontAwesomeIcon className='text-red-700 text-xs ' icon={faTrash} /></button>
                                    </div>
                                </div>

                                <div className='absolute top-5 left-6'>
                                    <small className='mr-2 bg-sky-600 px-1.5 py-0.5 text-white cursor-pointer'>{bestDeal.offer}</small>
                                    <small className='bg-violet-700	px-1.5 py-0.5 text-white cursor-pointer'>{bestDeal.use}</small>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;