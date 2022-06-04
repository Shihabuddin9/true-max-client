import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../signinPage/Loading/Loading';
import google from '../google-img/google.png'

const SocialSignin = () => {
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let location = useLocation();

    if (loading) {
        return <Loading></Loading>

    }
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='flex items-center'>
                <div style={{ height: '1px' }} className='border bg-gray-900 w-full'></div>
                <p className='my-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='border bg-gray-900 w-full'></div>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => signInWithGoogle()} className='border-2 rounded-full border-slate-800 py-1.5 px-8 text-sm font-medium flex hover:border-red-500 hover:duration-500'><span><img className='h-6 mr-4' src={google} alt="" /></span> <span>CONTINUE WITH GOOGLE</span></button>
            </div>
        </div>
    );
};

export default SocialSignin;