import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import INventory from './component/Inventory/INventory';
import Footer from './component/Footer/Footer';
import Signup from './SignupPage/Signup/Signup';
import Signin from './signinPage/Signin/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './requireAuthPage/RequireAuth/RequireAuth';
import AboutUs from './aboutUsPage/AboutUs/AboutUs';
import NotFound from './notFoundPage/NotFound/NotFound';
import BestDealsDetail from './component/BestDealsDetail/BestDealsDetail';
import AddBestDealsCar from './addBestDealsCar/AddBestDealsCar/AddBestDealsCar';
import ManageServices from './manageServices/ManageServices/ManageServices';
import UpdateServices from './component/UpdateServices/UpdateServices';
import Dealers from './component/Dealers/Dealers';
import React, { useState, useEffect } from 'react'
import {
  PropagateLoader
} from 'react-spinners';
import MyItems from './component/MyItems/MyItems';




function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])
  return (
    <div className="flex justify-center items-baseline">
      <div>
        {
          loading ?
            <div className='flex justify-center h-screen items-center'>
              <PropagateLoader
                color={'#36D7B7'} loading={loading} size={25} />
            </div>
            :
            <>
              <Header></Header>
              <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='blogs' element={<AboutUs></AboutUs>}></Route>
                <Route path='/inventory' element={<INventory></INventory>}></Route>
                <Route path='/dealers' element={<Dealers></Dealers>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/signin' element={<Signin></Signin>}></Route>

                <Route path='/addBestDealsCar' element={
                  <RequireAuth>
                    <AddBestDealsCar></AddBestDealsCar>
                  </RequireAuth>
                }></Route>

                <Route path='/service' element={
                  <RequireAuth>
                    <ManageServices></ManageServices>
                  </RequireAuth>
                }></Route>

                <Route path='/myitems' element={
                  <RequireAuth>
                    <MyItems></MyItems>
                  </RequireAuth>
                }></Route>

                <Route path='/update/:id' element={<UpdateServices></UpdateServices>}></Route>
                <Route path='/bestDeal/:bestDealsDetailId' element={<BestDealsDetail></BestDealsDetail>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
              </Routes>
              <Footer></Footer>
              <ToastContainer />
            </>
        }

      </div>
    </div>
  );
}

export default App;
