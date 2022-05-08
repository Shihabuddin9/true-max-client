import React from 'react';
import './Brand.css'

const Brand = (props) => {
    const { img, name } = props.brand
    return (
        <div className='border relative md:h-48 h-36 cursor-pointer'>
            <img className='img-align ' src={img} alt="" />
            <p className='absolute bottom-0 border-t w-full font-medium text-gray-700'>{name}</p>
        </div>
    );
};

export default Brand;