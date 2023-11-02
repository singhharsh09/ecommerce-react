import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/navbar'
import SignUp from './components/signUp';
import Login from './components/login';
import Cart from './components/cart';
import ErrorPage from './components/error404';


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
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
