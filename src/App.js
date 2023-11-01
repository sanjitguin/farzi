import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import { Route, Routes, Link } from 'react-router-dom';


import AppLayout from './component/app-layout';
import Home from "./pages/home";
import About from './pages/about';
import Product from './pages/product';
import ProductDetails from './pages/product-details';

import "./server"
import HomeLayout from './component/home-layout';
import AppElement from './component/app-element';
import UIElement from './component/ui-element';
import ScreenElement from './component/screen-element';


const App = (prop) => {
  return (
    <Fragment>
      <Routes>
        <Route path= "/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Product />} />
          <Route path="products/:id" element={ <ProductDetails /> } />
          <Route path="browse/:id" element={<HomeLayout />}>
            <Route index element={ <AppElement />} />
            <Route path="ui-element" element={ <UIElement />} />
            <Route path="screen-element" element={ <ScreenElement />} />
          </Route>
        </Route>
        
      </Routes>
    </Fragment>
    
  )
}
export default App;
