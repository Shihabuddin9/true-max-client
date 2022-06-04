import React, { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://warm-wildwood-23363.herokuapp.com/viewBrands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <section className='text-center md:my-20 my-12'>
            <p className='text-sm text-orange-500 font-medium'>TOP MAKES</p>
            <h1 className='mt-2 md:text-4xl text-3xl font-semibold text-red-800'>Browse By Brands</h1>
            <div className='grid md:grid-cols-6 grid-cols-2 md:gap-x-6 gap-x-2 md:gap-y-8 gap-y-6 md:mx-6 mx-1 md:mt-12 mt-6'>
                {
                    brands.map(brand => <Brand
                        key={brand.id}
                        brand={brand}
                    ></Brand>)
                }
            </div>
        </section>
    );
};

export default Brands;