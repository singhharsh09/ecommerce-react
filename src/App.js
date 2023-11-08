import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/navbar'
import SignUp from './components/signUp';
import Login from './components/login';
import Cart from './components/cart';
import ErrorPage from './components/error404';
import ForgetPassword from './components/forgetPassword';
import ResetPassword from './components/forgetPassword/ResetPassword';
import Verification from './components/signUp/Verification';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element=<Home/> > </Route> 
        <Route path="*" element=<ErrorPage/>> </Route>
        <Route path="/signup" element=<SignUp/>> </Route>
        <Route path="/login" element=<Login/>> </Route>
        <Route path="/cart" element=<Cart/>> </Route>
        <Route path="/forgetPassword" element=<ForgetPassword/>> </Route>
        <Route path="/resetPassword" element=<ResetPassword/>> </Route>
        <Route path="/verification" element=<Verification/>> </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
