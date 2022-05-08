import React, { useState } from 'react'
import Button from './Button';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import './Nav.css'

const Nav = () => {
    const [user] = useAuthState(auth)
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-white py-4 md:pl-10 px-7 md:px-0'>
                <div className='flex justify-between'>
                    <div className='cursor-pointer flex items-center font-[Poppins] '>
                        <Link to='/'><span className='font-extrabold text-red-700'>TRUE<span className='text-black font-bold'>max</span></span></Link>
                    </div>

                    <div onClick={() => setOpen(!open)} className='text-3xl w-6 h-6 cursor-pointer md:hidden'>
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-0 w-50 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14' : 'top-[-490px]'}`}>
                    <li><CustomLink to="/">Home</CustomLink></li>

                    <li className='md:mx-5 my-1 md:my-0'><CustomLink to="/inventory">Inventory</CustomLink></li>

                    <li><CustomLink to="/dealers">Dealers</CustomLink></li>

                    <li className='md:mx-5 my-1 md:my-0'><CustomLink to="/blogs">Blogs</CustomLink></li>

                    {
                        user && <>

                            <ul className='md:mr-5 dropdown'>
                                <li className=''>More Items&#8964;

                                    <ul className='dropdown-content'>
                                        <li className='md:mr-5 my-1 md:my-0'><CustomLink to="/service">
                                            Manage Items</CustomLink></li>

                                        <li className='md:mr-5 my-1 md:my-0 '><CustomLink to="/addBestDealsCar">
                                            Add Items</CustomLink></li>

                                        <li className='md:mr-5 my-1 md:my-0 '><CustomLink to="/myitems">
                                            My Items</CustomLink></li>

                                        <li className='mb-1 md:mb-0'><CustomLink to="/signin" onClick={() => signOut(auth)}>
                                            Sign Out</CustomLink></li>


                                    </ul>

                                </li>
                            </ul>
                        </>
                    }

                    <li className='md:mr-5 my-1 md:my-0'><CustomLink to="/signup">Sign Up</CustomLink></li>

                    {
                        !user &&

                        <li className='mb-1 md:mb-0'><CustomLink to="/signin">Sign in</CustomLink></li>
                    }

                    <Button>
                        Add Your Vehicle
                    </Button>
                </ul>
            </div>
        </div>
    )
}

export default Nav










































// import React, { useState } from 'react'
// import Button from './Button';
// import { MenuIcon, XIcon } from '@heroicons/react/solid';
// import CustomLink from '../CustomLink/CustomLink';
// import { Link } from "react-router-dom";
// import auth from '../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';


// const Nav = () => {
//     const [user]=useAuthState(auth)
//     let Links = [
//         { name: "Home", link: "/" },
//         { name: "Inventory", link: "/inventory" },
//         { name: "Dealers", link: "/dealers" },
//         { name: "About us", link: "/aboutus" },
//         { name: "Service", link: "/service" },
//         { name: "Sign Up", link: "/signup" },
//         { name: "Sign in", link: "/signin" }
//     ];
//     let [open, setOpen] = useState(false);
//     return (
//         <div className='shadow-md w-full fixed top-0 left-0 z-10'>
//             <div className='md:flex items-center justify-between bg-white py-4 md:pl-10 px-7 md:px-0'>
//                 <div className='flex justify-between'>
//                     <div className='cursor-pointer flex items-center font-[Poppins] '>
//                         <Link to='/'><span className='font-extrabold text-red-700'>TRUE<span className='text-black font-bold'>max</span></span></Link>
//                     </div>

//                     <div onClick={() => setOpen(!open)} className='text-3xl w-6 h-6 cursor-pointer md:hidden'>
//                         {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
//                     </div>
//                 </div>
//                 <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] right-0 w-50 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-25' : 'top-[-490px]'}`}>
//                     {
//                         Links.map((link) => (
//                             <li key={link.name} className='md:ml-8 text-sm md:my-0 my-7 font-medium'>
//                                 <CustomLink to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</CustomLink>
//                             </li>
//                         ))
//                     }
//                     <Button>
//                         Add Your Vehicle
//                     </Button>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Nav