import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google from '../google-img/google.png'

const SocialSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <div className='flex items-center'>
                <div style={{ height: '1px' }} className='border bg-gray-900 w-full'></div>
                <p className='my-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='border bg-gray-900 w-full'></div>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => signInWithGoogle()} className='border-2 rounded-full border-slate-800 py-1.5 px-8 text-sm font-medium flex'><span><img className='h-6 mr-4' src={google} alt="" /></span> <span>CONTINUE WITH GOOGLE</span></button>
            </div>
        </div>
    );
};

export default SocialSignin;