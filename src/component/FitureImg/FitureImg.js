import React from 'react';
import './FitureImg.css'

const FitureImg = () => {
    return (
        <div className='fitureImg'>
            <div className=' text-title'>
                <h1 className='text-white md:text-5xl text-2xl font-bold text-center'>22,000+ Browse Cars</h1>
                <h3 className='text-white mt-4 text-center font-serif text-sm'>Find Cars, Bikes & Certified New & Used Cars</h3>

                <div className='mt-16 search-bar-sm-none'>
                    <span className='text-white'>Explore</span> <span className='text-white md:mx-40 search-span'>Make</span> <span className='text-white ml-2'>Transmission</span>

                </div>
                <div className="flex items-center justify-center bg-white rounded-sm search-bar-sm-none">
                    <div className="flex py-3">

                        <input type="text" className="px-4 w-50 border-r border-gray-400 focus:outline-none " placeholder="What are you looking for..." />

                        <div className="flex justify-center">
                            <div className="w-50 pr-4">
                                <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:outline-none cursor-pointer" aria-label="Default select example">
                                    <option selected>+ Select an option &#x25BC;</option>
                                    <option value="1">Alfa Romeo</option>
                                    <option value="2">Audi</option>
                                    <option value="3">BMW</option>
                                    <option value="4">Chevrolet</option>
                                    <option value="5">Ferrari</option>
                                    <option value="6">Ford</option>
                                    <option value="7">Honda</option>
                                    <option value="8">Kia</option>
                                    <option value="9">Mercedes Benz</option>
                                    <option value="10">MG</option>
                                    <option value="11">Tesla</option>
                                    <option value="12">Toyota</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-50 pr-4">
                                <select className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:outline-none cursor-pointer border-l border-gray-400" aria-label="Default select example">
                                    <option selected>+ Select an option &#x25BC;</option>
                                    <option value="1">Automatic</option>
                                    <option value="2">Manual</option>
                                    <option value="3">Semi Automatic</option>
                                </select>
                            </div>
                        </div>

                        <button className="px-4 text-white bg-orange-600 hover:bg-orange-700 duration-500 border-l mr-4 text-sm">
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FitureImg;