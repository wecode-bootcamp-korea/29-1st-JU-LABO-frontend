import React, { useState, useEffect } from 'react';
import './Header.scss';
import Category from './Category';
import About from './About';

const Header = () => {
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem('login'))) {
      setIsToken(true);
    }
  }, []);

  return (
    <div>
      <div className="headWrapper">
        <img
          className="logoImg"
          src="/images/julabo_logo.png"
          alt="주라보 로고"
        />

        <div className="headerInner">
          <div className="headerNav">
            <div className="searchWrapper">
              <div className="searchIcon">
                <i class="fas fa-search" />
              </div>

              <input type="text" placeholder="search for products" />
              <div className="letter">
                <i class="far fa-envelope" />
              </div>
              <div className="loginSignup">
                <i class="far fa-user" />
                <div className="clickLoginSignup">
                  {isToken ? `Hello, ` : 'Log In/Register'}
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

          <div className="shoppingBag">
            <i class="fas fa-shopping-bag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
