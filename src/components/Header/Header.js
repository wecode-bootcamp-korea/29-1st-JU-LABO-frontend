import React from 'react';
import { useLocation } from 'react-router-dom';
import CartModal from '../../pages/Cart/CartModal/CartModal';
import './Header.scss';
import Category from './Category';
import About from './About';
import { Link } from 'react-router-dom';

const Header = ({ setIsOpen, isOpen }) => {
  const token = sessionStorage.getItem('login');
  const username = sessionStorage.getItem('username');
  const location = useLocation();

  const openCartModal = () => {
    if (location.pathname !== '/cart') {
      setIsOpen(prev => !prev);
    }
  };

  return (
    <div>
      <div className="headWrapper">
        <Link to="/">
          <img
            className="logoImg"
            src="/images/julabo_logo.png"
            alt="주라보 로고"
          />
        </Link>

        <div className="headerInner">
          <div className="headerNav">
            <div className="searchWrapper">
              <div className="searchIcon">
                <i className="fas fa-search" />
              </div>
              <input type="text" placeholder="search for products" />
              <div className="letter">
                <i className="far fa-envelope" />
              </div>
              <div className="loginSignup">
                <i className="far fa-user" />
                <div className="clickLoginSignup">
                  <Link to="/login" className="textLink">
                    {token
                      ? `Hello, ${username.slice(1, username.length - 1)} `
                      : 'Log In/Register'}
                  </Link>
                </div>
              </div>
            </div>

            <div className="category">
              <Category name="Spring" param="0" />
              <Category name="Summer" param="6" />
              <Category name="Autumn" param="12" />
              <Category name="Winter" param="18" />
              <About name="About" />
            </div>
          </div>

          <div className="shoppingBag" onClick={openCartModal}>
            <i className="fas fa-shopping-bag" />
          </div>
        </div>
      </div>
      {isOpen && <CartModal setIsOpen={setIsOpen} isOpen={isOpen} />}
    </div>
  );
};

export default Header;
