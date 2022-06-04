import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to="/addBestDealsCar"><button className='bg-orange-500 hover:bg-orange-600 text-white font-[Poppins] py-2 px-6 rounded lg:ml-8 md:ml-3 mr-3 md:mr-0
        duration-500 text-sm'>
            {props.children}
        </button></Link>
    )
}

export default Button