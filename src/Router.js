import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import SearchList from './pages/ProductList/SearchList/SearchList';
import AboutUs from './pages/AboutUs/AboutUs';

const Router = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:category_id" element={<ProductList />} />
        <Route
          path="/product/:id"
          element={<ProductDetail setIsOpen={setIsOpen} isOpen={isOpen} />}
        />
        <Route
          path="/cart"
          element={<Cart setIsOpen={setIsOpen} isOpen={isOpen} />}
        />

        <Route path="/search" element={<SearchList />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
