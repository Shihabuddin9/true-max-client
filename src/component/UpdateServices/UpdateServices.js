import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBars } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

const UpdateServices = () => {
    const { id } = useParams()
    const [upadteServices, setUpdateServices] = useState({})
    useEffect(() => {
        const url = `https://warm-wildwood-23363.herokuapp.com/viewCar/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateServices(data))
    }, [])


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        const url = `https://warm-wildwood-23363.herokuapp.com/viewCar/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                toast('Update Success');
                reset();
            })

    };
    return (
        <div className='md:my-16 my-14'>
            <nav className='bg-gray-200 w-full mb-10'>
                <Link to="/service"><button className='text-gray-800 text-sm pb-1.5 pt-2 md:ml-12 ml-2'>&#171;
                    Manage Items</button></Link>
                <Link to="/addBestDealsCar"><button className='text-gray-800 text-sm pb-1.5 pt-2 ml-2'><span className='mr-2'>/</span>Add Items</button></Link>
            </nav>
            <div className='md:w-3/5 mx-auto'>
                <div className='md:w-2/5 mx-auto mb-9'>
                    <div className='border relative mx-2 md:mx-0'>
                        <div className='mt-3'>
                            <img className='mx-auto bestdeal-img px-2 md:px-0' src={upadteServices.img} alt="" />
                        </div>
                        <div className='text-left ml-2.5'>
                            <small className='text-gray-600'>{upadteServices.country}</small>
                            <h1 className='text-lg font-medium text-gray-900 hover:text-orange-600 cursor-pointer'>{upadteServices.name}</h1>
                            <p className='text-lg font-medium text-orange-600'>${upadteServices.price}</p>
                        </div>
                        <hr className='mx-3 mt-3 mb-2' />
                        <div className=''>
                            <div className='ml-2'>
                                <small className='text-gray-600'>{upadteServices.transmission}</small>
                                <small className='mx-5 text-gray-600'>{upadteServices.drive}</small>
                                <small className='text-gray-600'>{upadteServices.mileage}</small>
                            </div>
                            <div className='flex justify-around mt-3'>
                                <p className='text-xs font-medium'>{upadteServices.engine}</p>
                                <p className='text-xs font-medium px-9 md:px-0'>{upadteServices.wd}</p>
                                <p className='text-xs font-medium'>{upadteServices.mi}(mi)</p>
                            </div>
                        </div>
                        <p className='text-left ml-3 pb-2 mt-2 mb-1'><span className='text-xs text-gray-600'>Listed by:</span> <span className='text-sm font-medium text-gray-800'>{upadteServices.listed}</span></p>

                        <div className='absolute top-5 left-6'>
                            <small className='mr-2 bg-sky-600 px-1.5 py-0.5 text-white cursor-pointer'>{upadteServices.offer}</small>
                            <small className='bg-violet-700	px-1.5 py-0.5 text-white cursor-pointer'>{upadteServices.use}</small>
                        </div>
                    </div>
                </div>

                <div className='mx-2 md:mx-0'>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>

                        <div className='shadow-key-info px-4 pb-3'>
                            <div className=''>
                                <h1 className='py-3 text-xl font-medium'><FontAwesomeIcon className='text-red-600' icon={faList} /> Car Details</h1>
                            </div>

                            <label className='font-medium'>Body Type<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Truck, Sedan' {...register("country", { required: true, maxLength: 20 })} />

                            <label className='font-medium'>Condition<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Used, New' {...register("use")} />

                            <label className='font-medium'>Price<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='$ Price' type="number" {...register("price")} />

                            <label className='font-medium'>Photo url<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Photo url' type="text" {...register("img")} />

                            <label className='font-medium'>Year &#38; Name<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: 2019 Adx Alfa Romeo' type="text" {...register("name")} />
                        </div>

                        <div className='shadow-key-info px-4 mt-9'>
                            <div className=''>
                                <h1 className='py-3 text-xl font-medium'><FontAwesomeIcon className='text-red-600' icon={faBars} /> Car Specifics</h1>
                            </div>
                            <label className='font-medium'>Transmission<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Transmission' {...register("transmission")} />

                            <label className='font-medium'>DRIVE<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: DRIVE' {...register("drive")} />

                            <label className='font-medium'>MILEAGE<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: MILEAGE' {...register("mileage")} />

                            <label className='font-medium'>Engine<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Automatic, Manual' {...register("engine")} />

                            <label className='font-medium'>WD<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: FWD, EWD' {...register("wd")} />

                            <label className='font-medium'>Mileage (mi)<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: 15000, 45000' {...register("mi")} />

                            <label className='font-medium'>Listed by<span className='text-red-600'>*</span></label>
                            <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Mx Selling Cars, Mvp Automotives' {...register("listed")} />

                            <label className='font-medium'>Description</label>
                            <textarea className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Write something' {...register("description")} />

                            <input className=" w-full px-6 py-2.5  text-white font-medium text-xs leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-orange-600 hover:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out cursor-pointer my-4" value="Add and Continue" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateServices;