import React from 'react';
import bestservice from '../images/best-services/es7.png'
import mechanic1 from '../images/best-services-icon/mechanic1.png'
import money from '../images/best-services-icon/money.png'
import carservice from '../images/best-services-icon/car-service.png'
import hours from '../images/best-services-icon/24-hours.png'

const BestServices = () => {
    return (
        <div className='bg-sky-100 md:my-20 my-10 pt-20 pb-16 md:flex'>
            <div className='md:w-3/6 md:mx-4 mx-2'>
                <p className='font-medium text-orange-600 text-sm'>WHY CHOOSE US</p>
                <h1 className='md:text-4xl text-3xl font-medium md:w-80'>We Provide Best Services</h1>
                <div className='bg-orange-600 h-0.5 my-3' style={{ width: '60px' }}></div>
                <p className='text-gray-900 font-serif'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything years old will uncover many web sites still in their infancy from 45 BC, making it over 2000 years old will uncover many web sites still in their infancy</p>
                <img className='mt-10' src={bestservice} alt="" style={{ width: '95%' }} />
            </div>
            <div className='md:w-3/6'>
                <div className='md:flex md:mr-2 my-12 md:my-0 mx-2 md:mx-0'>
                    <div className='bg-gray-100 md:mr-3 py-5 px-3 shadow'>
                        <img className='h-10' src={mechanic1} alt="" />
                        <h1 className='text-gray-900 font-medium mt-1 mb-2'>Expert Certified Mechanics</h1>
                        <p className='text-sm text-gray-700'>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating.</p>
                    </div>
                    <div className='bg-gray-100 py-5 px-3 mt-5 md:mt-0 shadow'>
                        <img className='h-10' src={money} alt="" />
                        <h1 className='text-gray-900 font-medium mt-1 mb-2'>Get Reasonable Price</h1>
                        <p className='text-sm text-gray-700'>Started his hearted any civilly. So me by marianne admitted speaking. Men bred fine call ask. Cease one miles truth day above seven. Suspicion sportsmen provision.</p>
                    </div>
                </div>
                <div className='md:flex md:mr-2 mt-5 mx-2 md:mx-0'>
                    <div className='bg-gray-100 md:mr-3 py-5 px-3 shadow'>
                        <img className='h-10' src={carservice} alt="" />
                        <h1 className='text-gray-900 font-medium mt-1 mb-2'>Genuine Spares Parts</h1>
                        <p className='text-sm text-gray-700'>Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behaviour arranging.</p>
                    </div>
                    <div className='bg-gray-100 py-5 px-3 mt-5 md:mt-0 shadow'>
                        <img className='h-10' src={hours} alt="" />
                        <h1 className='text-gray-900 font-medium mt-1 mb-2'>24 Hours Support</h1>
                        <p className='text-sm text-gray-700'>Boy desirous families prepared gay reserved add ecstatic say. Replied joy age visitor nothing cottage. Mrs door paid led loud sure easy read.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestServices;