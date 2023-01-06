import React from "react";
import {BrowserRouter, Routes,Route } from "react-router-dom"
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import User from './components/User/User';
import Product from './components/Product/Product';
import Category from './components/Category/Category';
import Navmenu from './components/Navmenu/Navmenu';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';


const NavLayout = () => (
  <>
    <Outlet />
  </>
);

const App = () => {
  return (  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout/>}>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/user" element={<User title='User'/>} />      
              <Route path="/product" element={<Product title='Product'/>} />      
              <Route path="/category" element={<Category title='Category'/>} />      
          </Route>
          <Route>
              <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App



