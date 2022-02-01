import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div>
      <div className="headwrapper">
        <img src="images/julabo_logo.png" alt="주라보 로고" />

        <div className="headerinner">
          <div className="headerNav">
            <div className="searchwrapper">
              <div className="searchicon">
                <img src="images/searchsmall.png" alt="돋보기" />
              </div>

              <input type="text" placeholder="search for products"></input>
              <div className="letter">
                <img src="images/letter.png" alt="contact" />
              </div>
              <div className="loginSignup">
                <img src="images/user.png" alt="user" />
                <div className="clickloginsignup">Log In/Register</div>
              </div>
            </div>

            <div className="category">봄여름가을겨울</div>
          </div>

          <div className="shoppingbag">
            <img src="images/bag1.png" alt="bag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
