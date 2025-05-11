import React from 'react';
import { createRoot } from 'react-dom/client';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import FarmerReducer from './redux/reducer/Farmerreducer';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Pagenotfound from './components/Pagenotfound';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';
import FarmerLogin from './components/FarmerLogin';
import ForgotPassword from './components/ForgotPassword';
import Farmer from './components/Farmer';
import Farmerdashboard from './components/Farmerdashboard';
import AddProducts from './components/AddProducts';
import TodaysRates from './components/TodaysRates';
import Vendor from './components/Vendor';
import VendorLogin from './components/VendorLogin';
import Vendordashboard from './components/Vendordashboard';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ShowOngoingLot from './components/ShowOngoingLot';
import Gallery from './components/Gallery';
import { ToastContainer } from 'react-toastify';
import Logistics from './components/Logistics';
import Update from './components/Update';
import SeefOrders from './components/SeefOrders';
import Seemaxbids from './components/Seemaxbids';
import Finalorders from './components/Finalorders';
import Seevorders from './components/Seevorders';
import Finalbids from './components/Finalbids';
import Seefeedback from './components/Seefeedback';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

const farmerStore = createStore(FarmerReducer, composeWithDevTools());

const record = (
  <>
    <Provider store={farmerStore}>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/Seefeedback' element={<Seefeedback />} />
          <Route path='/Seemaxbids/:fpid' element={<Seemaxbids />} />
          <Route path='/Finalorders/:fid' element={<Finalorders />} />
          <Route path='/Seevorders' element={<Seevorders />} />
          <Route path='/Finalbids/:vendorid' element={<Finalbids />} />
          <Route path='/SeefOrders' element={<SeefOrders />} />
          <Route path='/Logistics' element={<Logistics />} />
          <Route path='/Update' element={<Update />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/ShowOngoingLot' element={<ShowOngoingLot />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/Vendordashboard' element={<Vendordashboard />} />
          <Route path='/VendorLogin' element={<VendorLogin />} />
          <Route path='/Vendor' element={<Vendor />} />
          <Route path='/TodaysRates' element={<TodaysRates />} />
          <Route path='/AddProducts' element={<AddProducts />} />
          <Route path='/' element={<Home />} />
          <Route path='/homepage' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Contactus' element={<Contactus />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Pagenotfound' element={<Pagenotfound />} />
          <Route path='/farmerlogin' element={<FarmerLogin />} />
          <Route path='/forgotpass' element={<ForgotPassword />} />
          <Route path='/Farmer' element={<Farmer />} />
          <Route path='/Farmerdashboard' element={<Farmerdashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(record);
