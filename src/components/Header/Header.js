import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <div className="headwrapper">
        <img
          className="logoImg"
          src="/images/julabo_logo.png"
          alt="주라보 로고"
        />

        <div className="headerinner">
          <div className="headerNav">
            <div className="searchwrapper">
              <div className="searchicon">
                <i className="fas fa-search" />
              </div>

              <input type="text" placeholder="search for products" />
              <div className="letter">
                <i className="far fa-envelope" />
              </div>
              <div className="loginSignup">
                <i className="far fa-user" />
                <div className="clickloginsignup">Log In/Register</div>
              </div>
            </div>

            <div className="category">весна лето осень зима</div>
          </div>

          <div className="shoppingbag">
            <i className="fas fa-shopping-bag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
