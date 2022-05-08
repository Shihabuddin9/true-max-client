import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ContactDealer from '../ContactDealer/ContactDealer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faHome } from '@fortawesome/free-solid-svg-icons'
import './BestDealsDetail.css'
import ViewINventory from '../ViewInventory/ViewINventory';

const BestDealsDetail = () => {
    const { bestDealsDetailId } = useParams();
    const [carDetails, setCarDetails] = useState({})
    useEffect(() => {
        const url = `https://warm-wildwood-23363.herokuapp.com/viewCar/${bestDealsDetailId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setCarDetails(data))

    }, [])
    return (
        <section className='md:my-16 my-14'>
            <nav className='bg-gray-200 w-full mb-10'>
                <Link to="/"><button className='text-gray-800 text-sm pb-1.5 pt-2 md:ml-12 ml-2'><FontAwesomeIcon icon={faHome} /> Go To Home</button></Link>
                <Link to="/inventory"><button className='text-gray-800 text-sm pb-1.5 pt-2 ml-2'><span className='mr-2'>/</span>Inventory</button></Link>
            </nav>

            <div className='md:grid grid-cols-3 gap-x-4 md:mx-10 mx-4'>

                <div className='col-span-2'>
                    <div className='shadow'>
                        <div className='md:flex justify-between items-center px-3 mb-8'>
                            <div>
                                <div>
                                    <span className='bg-green-700 text-white text-sm p-0.5 mr-2'>{carDetails.offer}</span>
                                    <span className='bg-green-700 text-white text-sm p-0.5'>{carDetails.use}</span>
                                </div>
                                <h1 className='md:text-2xl text-xl font-bold text-gray-900'>{carDetails.name}</h1>
                            </div>
                            <div className='mt-3 md:mt-0'>
                                <span className='bg-gray-100 p-1 text-xs text-gray-700'>Stock #{carDetails.stock}</span>
                                <p className='text-white md:bg-gray-900 py-1 px-3 text-xl font-medium md:mt-6 mt-2 bg-gray-900 w-fit'>$ {carDetails.price}</p>
                            </div>
                        </div>
                        <div className='md:mx-7 mx-3 pb-3'>
                            <img className='w-full' src={carDetails.img} alt="" />
                        </div>
                    </div>
                    {/* Key Information */}
                    <div className='shadow-key-info mt-6 p-4'>
                        <h1 className='text-2xl font-medium text-gray-900 mb-5'>Key Information</h1>
                        <div className='md:grid grid-cols-3 mb-12'>

                            <div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 px-2 text-xs flex justify-between items-center'><span className=''>Body Type </span> <span>{carDetails.country}</span></p>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Engine Size</span> <span>{carDetails.size}(cc)</span></p>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Drive</span> <span>{carDetails.wd}</span></p>
                                </div>
                                <div className=''>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Interior Color</span>
                                        <span>{carDetails.interiorColor}</span></p>
                                </div>
                            </div>

                            <div className='md:mx-2 my-3 md:my-0'>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Mileage</span> <span>{carDetails.mi}(mi)</span></p>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Year</span> <span>{carDetails.year}</span></p>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Condition</span> <span>{carDetails.use}</span></p>
                                </div>
                                <div className=''>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Seller Type</span> <span>{carDetails.seller}</span></p>
                                </div>
                            </div>

                            <div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Transmission</span> <span>{carDetails.engine}</span></p>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Fuel Type</span> <span>{carDetails.type}</span></p>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>Exterior Color</span> <span>{carDetails.exteriorColor}</span></p>
                                </div>
                                <div className=''>
                                    <p className='bg-gray-100 py-2.5 text-xs flex justify-between items-center px-2'><span>No. of Owners</span> <span>{carDetails.owner}</span></p>
                                </div>
                            </div>

                        </div>
                        {/* Features */}
                        <div className='mb-4'>
                            <h1 className='text-2xl font-medium text-gray-900 mb-5'>Features</h1>
                            <div className='md:grid grid-cols-3'>
                                <div className='text-xs'>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresa}</p>
                                    <p className='my-2'><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresb}</p>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresc}</p>
                                    <p className='my-2'><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresd}</p>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featurese}</p>
                                </div>

                                <div className='text-xs'>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresf}</p>
                                    <p className='my-2'><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresg}</p>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresh}</p>
                                    <p className='my-2'><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresi}</p>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresj}</p>
                                </div>

                                <div className='text-xs'>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresk}</p>
                                    <p className='my-2'><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresl}</p>
                                    <p className='my-2'><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresm}</p>
                                    <p><FontAwesomeIcon className='text-green-600 mr-2' icon={faCheckCircle} />{carDetails.featuresn}</p>
                                </div>

                            </div>
                        </div>
                        {/* Description */}
                        <div>
                            <h1 className='text-2xl font-medium text-gray-900 mb-5'>Description</h1>
                            <p className='text-sm leading-loose'>{carDetails.description}</p>
                        </div>
                        {/* Features */}
                        <div>
                            <h1 className='text-2xl font-medium text-gray-900 my-5'>Features</h1>
                            <p className='text-sm leading-loose'>{carDetails.features1}</p>
                            <p className='text-sm leading-loose mt-3.5'>{carDetails.features2}</p>
                        </div>

                    </div>
                </div>
                <div>
                    <ContactDealer></ContactDealer>
                    <div className='contack-shadow p-2 mt-16'>
                        <div className='view-inventory relative mx-2 md:mx-0'>
                            <div className='text-center pt-12'>
                                <p className='text-orange-600 font-medium mb-1'>WE ARE SINCE 1970</p>
                                <h1 className='text-white font-semibold text-2xl mb-3'>Buy Your Car Quickly And Easily</h1>

                                <p className='text-white font-medium'>We believe in making simple and fair pricing plans. Choose your</p>
                                <p className='text-white font-medium'>next successful plan and get started today!.</p>
                            </div>
                            <div className='flex flex-col md:flex-row justify-center mx-14 md:mx-0 mt-12'>
                                <Link to="/inventory"><button className='bg-orange-500 hover:bg-orange-700 duration-500 text-white px-3 py-2'>View Inventory</button></Link>
                                <small className='md:mx-1 my-3 md:my-0 '></small>
                                <Link to="/addBestDealsCar"><button className='bg-white hover:bg-gray-300  px-3 py-2 text-gray-800 hover:text-gray-700 font-medium'> sell Your Cars.. </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestDealsDetail;