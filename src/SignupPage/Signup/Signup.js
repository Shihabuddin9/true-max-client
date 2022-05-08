import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SellCar from '../SellCar/SellCar';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from '../../signinPage/Loading/Loading';
import SocialSignin from '../../socialSignin/SocialSignin/SocialSignin';
import PageTitle from '../../hooks/PageTitle/PageTitle';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Signup = () => {
    // password
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
    // confirm password
    const [confirmValues, setConfirmValues] = useState({
        password: "",
        showPassword: false,
    });

    const [notMatchPassword, setNotMatchPassword] = useState('')
    const [
        createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()
    const [updateProfile, updating] = useUpdateProfile(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }


    const handleUserSubmit = async (event) => {
        event.preventDefault()
        const userName = event.target.userName.value
        const email = event.target.email.value;
        const password = `event.target.${values}.value`
        const confirmPassword = `event.target.${confirmValues}.value`


        if (password !== confirmPassword) {
            setNotMatchPassword('Your two passwords did not match')
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: userName });
        // toast('Updated profile');
        navigate('/')
    }

    // password
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    // confirm password
    const handleClickShowPasswords = () => {
        setConfirmValues({ ...confirmValues, showPassword: !confirmValues.showPassword });
    };

    const handleMouseDownPasswords = (event) => {
        event.preventDefault();
    };

    const handlePasswordChanges = (prop) => (event) => {
        setConfirmValues({ ...confirmValues, [prop]: event.target.value });
    };
    return (
        <div className='md:pb-28 pb-10 bg-gray-200'>
            <PageTitle title="SIGNUP"></PageTitle>
            <div className='mx-1 md:mx-0'>
                <SellCar></SellCar>
                <div className='md:w-3/5 mx-auto px-3 md:px-0'>
                    <h1 className='font-medium text-2xl text-gray-800 mb-4'>Register With Us</h1>
                    <p className=' font-serif'>Sign up to use your dashboard its fast and free. Showcase your brand, enhance your listings and much more.</p>
                </div>

                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto md:mt-14 mt-10">

                    <form onSubmit={handleUserSubmit}>
                        {/* userName & Display Name */}
                        <div className="grid grid-cols-2 gap-4">

                            <div className="form-group mb-6">
                                <input type="text" name="userName" className="form-control block w-full md:px-3 px-1 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                    aria-describedby="emailHelp123" placeholder="User Name" required />
                            </div>
                            <div className="form-group mb-6">
                                <input type="text" name="displayName" className="form-control block w-full md:px-3 px-0.5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
                                    aria-describedby="emailHelp124" placeholder="Display Name" />
                            </div>
                        </div>

                        {/* email */}
                        <div className="form-group mb-6">
                            <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email</label>
                            <input type="email" name="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none focus:border-b-2 border-b-2 border-b-gray-400 hover:border-b-2 hover:border-b-gray-800 focus:border-b-blue-600" id="exampleInputEmail2"
                                aria-describedby="emailHelp" required />
                        </div>
                        {/* password */}
                        <div className="form-group mb-6">
                            <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">password</label>
                            <Input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <FontAwesomeIcon className='w-4' icon={faEye} /> : <FontAwesomeIcon className='w-4' icon={faEyeSlash} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </div>
                        {/* confirm-password */}
                        <div className="form-group mb-6">
                            <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">confirm-Password</label>
                            <Input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                type={confirmValues.showPassword ? "text" : "password"}
                                onChange={handlePasswordChanges("password")}
                                value={confirmValues.password}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPasswords}
                                            onMouseDown={handleMouseDownPasswords}
                                        >
                                            {confirmValues.showPassword ? <FontAwesomeIcon className='w-4' icon={faEye} /> : <FontAwesomeIcon className='w-4' icon={faEyeSlash} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {/* error message */}
                            <span className='text-red-500 text-xs'>{notMatchPassword}</span>
                        </div>

                        <div className=" mb-6">
                            <div className="form-group form-check">
                                <input type="checkbox"
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    id="exampleCheck2" required />
                                <label className="form-check-label inline-block text-gray-800 mb-3 text-sm" for="exampleCheck2">I agree to the terms of service</label>
                            </div>
                        </div>

                        <button type="submit" className=" w-full px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 bg-orange-600 hover:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out">Sign up</button>

                        <Link to="/signin"><p className="text-gray-800 mt-6 text-center text-sm">Already have an account? <a href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Sign in</a>
                        </p></Link>

                    </form>
                    <SocialSignin></SocialSignin>
                </div>
            </div>
        </div>
    );
};

export default Signup;