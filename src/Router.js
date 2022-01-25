import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

import Register from './components/Register/Register';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
