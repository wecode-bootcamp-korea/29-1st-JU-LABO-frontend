import React, { useState, useEffect } from 'react';
import CartModal from '../../pages/Cart/CartModal/CartModal';
import './Header.scss';
import Category from './Category';
import About from './About';
import { Link } from 'react-router-dom';

const Header = ({ setIsOpen, isOpen }) => {
  const [isToken, setIsToken] = useState(false);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('login'))) {
      fetch('', {
        headers: { Authorization: sessionStorage.getItem('login') },
      })
        .then(res => res.json())
        .then(res => {
          setUserInfo(res);
        });
      setIsToken(true);
    }
  }, []);

  const openCartModal = () => {
    setIsOpen(prev => !prev);
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
                <i class="fas fa-search" />
              </div>
              <input type="text" placeholder="search for products" />
              <div className="letter">
                <i className="far fa-envelope" />
              </div>

              <div className="loginSignup">
                <i class="far fa-user" />

                <div className="clickLoginSignup">
                  <Link to="/login" className="textLink">
                    {isToken ? `Hello, ${userInfo.name} ` : 'Log In/Register'}
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
