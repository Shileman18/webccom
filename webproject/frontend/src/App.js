
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
          <Route path="/forget-pass" element={<ForgetPassword />} />
          <Route path="/otp" element={<NewSubmit />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;