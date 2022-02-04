import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
