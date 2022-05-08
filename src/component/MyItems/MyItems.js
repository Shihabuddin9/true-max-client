import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const email = user.email
            const url = `https://warm-wildwood-23363.herokuapp.com/myitems?email=${email}`
            const { data } = await axios.get(url)
            setMyItems(data)

        }
        getItems()
    }, [user])
    return (
        <div className='md:mt-16 mt-14 pb-40'>
            <nav className='bg-gray-200 w-full mb-10'>
                <Link to="/service"><button className='text-gray-800 text-sm py-3 md:ml-12 ml-2'>&#171;
                    Manage Items</button></Link>
                <Link to="/addBestDealsCar"><button className='text-gray-800 text-sm py-3 ml-2'><span className='mr-2'>/</span>Add Items</button></Link>

                <span className='text-gray-800 text-sm py-3 md:ml-2'><span className='mr-2'>/</span><span className='text-red-600 font-medium  hidden md:inline-block'>Your Cars</span><span className='md:hidden text-red-600 font-medium'>Items</span> <button className='bg-red-600 text-white rounded-full font-semibold text-xs px-2 py-1'>{myItems.length}</button></span>
            </nav>
            <h1 className='text-3xl font-medium text-center'>Your Items</h1>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-x-6 gap-x-2 md:gap-y-8 gap-y-6 md:mx-6 mx-1 md:mt-12 mt-6'>
                {
                    myItems.map(myItem => <MyItem
                        key={myItem._id}
                        myItem={myItem}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;