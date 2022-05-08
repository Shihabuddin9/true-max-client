import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../signinPage/Loading/Loading';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) { return <Navigate to="/signin" state={{ from: location }} replace />; }

    // email verification
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center md:my-40 my-20'>
            <div className=''>
                <h1 className='md:text-3xl text-xl text-red-500 font-medium'>Your email is not verified</h1>
                <h1 className='md:text-3xl text-xl text-green-600 mt-3 mb-7'>Please Verify your email address!</h1>
                <button className='bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded inline-block text-center'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    send Verification email again
                </button>
            </div>
        </div>
    }

    return children;
}

export default RequireAuth;