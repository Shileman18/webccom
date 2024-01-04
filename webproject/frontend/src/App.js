
import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/SignIn';
import Home from './Home';
import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';
import ProductDisplay from "./productcomponent/SingleProduct";
import { ProductList } from "./productcomponent/ProductList";
import Cart from './cart/Cart';
import Contact from './contect/contact';
import Features from './features/features';
import Services from './serve/services';
import Faq from './faqs/faqs';
import Pageerror from './errorPage/errorPage';
import Aboutus from './aboutUs/aboutUs';
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/SignIn" element={<Signin />} />

          <Route path="/products/"element={<ProductList/>} />
          <Route path="/products/:productId"element={<ProductDisplay/>} />
          <Route path="/cart" element={<Cart/>} />


          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/features' element={<Features />} />
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/faqs' element={<Faq />} />
          <Route path='/errorPage' element={<Pageerror />} />
          <Route path='/aboutUs' element={<Aboutus />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;