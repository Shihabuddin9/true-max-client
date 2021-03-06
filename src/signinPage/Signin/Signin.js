import { Link, useLocation, useNavigate } from 'react-router-dom';
import SellCar from '../../SignupPage/SellCar/SellCar';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialSignin from '../../socialSignin/SocialSignin/SocialSignin';
import PageTitle from '../../hooks/PageTitle/PageTitle';
import { toast } from 'react-toastify';
import { useState } from 'react';



const Signin = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    let location = useLocation();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );


    if (loading) {
        return <Loading></Loading>
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }



    const handleUserSignin = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        signInWithEmailAndPassword(email, password)

    }


    let errorMassage;
    if (error) {
        console.log(error)
        errorMassage = <p className='text-red-600 font-bold text-center mt-2'>Please Enter Correct Email and Password</p>
    }


    return (
        <div className='md:pb-28 pb-10 bg-gray-200'>
            <PageTitle title="SIGNIN"></PageTitle>
            <div className='mx-3 md:mx-0'>
                <SellCar></SellCar>
                <div className='md:w-3/5 mx-auto px-3 md:px-0'>
                    <h1 className='font-medium text-2xl text-gray-800 mb-4'>Sign In & Access Your Account</h1>
                    <p className=' font-serif'>Sign in to use your dashboard its fast and free. Showcase your brand, enhance your listings and much more.</p>
                </div>

                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto md:mt-14 mt-10">

                    <form onSubmit={handleUserSignin}>
                        <div className="form-group mb-6">
                            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email</label>
                            <input type="email" name="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInputEmail2"
                                aria-describedby="emailHelp" required value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-group mb-1">
                            <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                            <input type="password" name="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInputEmail2"
                                aria-describedby="emailHelp" required />
                        </div>

                        <p className='my-1'> {errorMassage}</p>
                        <div className=" my-6">
                            <button onClick={async () => {
                                if (email) {
                                    await sendPasswordResetEmail(email);
                                    toast('Sent email');
                                }
                                else {
                                    toast('please enter your email address');
                                }
                            }}
                                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out cursor-pointer">Forgot
                                password?</button>
                        </div>

                        <button type="submit" className=" w-full px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-orange-600 hover:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out">Sign in</button>

                        <Link to="/signup"><p className="text-gray-800 mt-6 text-center text-sm">New User? <a href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Sign Up</a>
                        </p></Link>
                    </form>

                    <SocialSignin></SocialSignin>
                </div>
            </div>
        </div>
    );
};

export default Signin;