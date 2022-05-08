import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faBars } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import PageTitle from '../../hooks/PageTitle/PageTitle';

const AddBestDealsCar = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data)
        const url = `https://warm-wildwood-23363.herokuapp.com/viewCar`
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                toast('Success');
                reset();
            })

    };

    return (
        <div className=' md:my-32 my-20 md:w-3/5 mx-auto'>
            <PageTitle title="ADD ITEMS"></PageTitle>
            <div className='mb-8 mx-2 md:mx-0'>
                <h1 className='md:text-4xl text-xl font-medium text-gray-900'>What Car Are You Selling?</h1>
                <p className='text-sm mt-1 text-gray-700'>Items marked with * are required fields.</p>
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
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Used, New' {...register("use", { required: true })} />

                        <label className='font-medium'>Price<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='$ Price' type="number" {...register("price", { required: true })} />

                        <label className='font-medium'>Photo url<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Photo url' type="text" {...register("img", { required: true })} />

                        <label className='font-medium'>Year &#38; Name<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: 2019 Adx Alfa Romeo' type="text" {...register("name", { required: true })} />

                        <label className='font-medium'>Email<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Email' type="email" {...register("email", { required: true })} />
                    </div>

                    <div className='shadow-key-info px-4 mt-9'>
                        <div className=''>
                            <h1 className='py-3 text-xl font-medium'><FontAwesomeIcon className='text-red-600' icon={faBars} /> Car Specifics</h1>
                        </div>
                        <label className='font-medium'>Transmission<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Transmission' {...register("transmission", { required: true })} />

                        <label className='font-medium'>DRIVE<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: DRIVE' {...register("drive", { required: true })} />

                        <label className='font-medium'>MILEAGE<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: MILEAGE' {...register("mileage", { required: true })} />

                        <label className='font-medium'>Engine<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Automatic, Manual' {...register("engine", { required: true })} />

                        <label className='font-medium'>WD<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: FWD, EWD' {...register("wd", { required: true })} />

                        <label className='font-medium'>Mileage (mi)<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: 15000, 45000' {...register("mi", { required: true })} />

                        <label className='font-medium'>Listed by<span className='text-red-600'>*</span></label>
                        <input className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' placeholder='Exam: Mx Selling Cars, Mvp Automotives' {...register("listed", { required: true })} />

                        <label className='font-medium'>Description</label>
                        <textarea className='form-control block w-full md:px-3 px-1 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Write something' {...register("description", { required: true })} />

                        <input className=" w-full px-6 py-2.5  text-white font-medium text-xs leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-orange-600 hover:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out cursor-pointer my-4" value="Add and Continue" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBestDealsCar;