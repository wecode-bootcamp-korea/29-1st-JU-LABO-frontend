import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';

import Login from './components/Login/Login';
import Register from './components/Register/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Footer />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
