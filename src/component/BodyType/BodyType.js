import React from 'react';
import './BodyType.css'

const BodyType = (props) => {
    const { img, name } = props.bodyType
    return (
        <div className=' hover:text-orange-600 cursor-pointer'>

            <img className='md:h-28 h-16 zoom hover:duration-700 md:mx-6 mx-3 my-3' src={img} alt="" />


            <p className='font-medium mt-3'>{name}</p>


        </div>
    );
};

export default BodyType;