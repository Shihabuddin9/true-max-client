import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './ContactDealer.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ContactDealer = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://warm-wildwood-23363.herokuapp.com/contact`
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                toast('Thanks!! We will contact you shortly');
                reset();
            })

    };
    return (
        <div className='contack-shadow px-4 py-3 mt-14 md:mt-0'>
            <h1 className='text-2xl font-medium text-gray-900 mb-3'>Contact Dealer</h1>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <label>Your Name<span className='text-red-800'>*</span></label>
                <input className='form-control block w-full md:px-3 px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' value={user?.displayName} readOnly disabled type="text" {...register("name", { required: true, maxLength: 20 })} />

                <label>Email<span className='text-red-800'>*</span></label>
                <input className='form-control block w-full md:px-3 px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' type="email" autoComplete='off'  {...register("email", { required: true, })} />

                <label>Contact No<span className='text-red-800'>*</span></label>
                <input className='form-control block w-full md:px-3 px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' type="number"  {...register("contact", { required: true, })} />

                <label>Something Write<span className='text-red-800'>*</span></label>
                <textarea className='form-control block w-full md:px-3 px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-3' {...register("massage", { required: true, })} />




                <input className=" w-full px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-orange-600 hover:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out cursor-pointer" type="submit" />
            </form>
        </div>
    );
};

export default ContactDealer;