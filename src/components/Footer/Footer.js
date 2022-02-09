import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerInnerWrapper">
          <div className="footerInner">
            <div className="innerAboutUs">
              <h4>Ju LaBo</h4>
              <div className="liAboutUs">
                <ul>
                  <li>About Us</li>
                  <li>Discovery</li>
                  <li>Ju Journal</li>
                </ul>
              </div>
            </div>

            <div className="innerClient">
              <h4>Client Care</h4>
              <div className="liClient">
                <ul>
                  <li>Product Warranty</li>
                  <li>Privacy Policy</li>
                  <li>Do Not Sell My Personal</li>
                  <li>Information</li>
                  <li>Terms &amp; Conditions</li>
                  <li>Terms &amp; Conditions Of Sale</li>
                </ul>
              </div>
            </div>

            <div className="innerShipping">
              <h4>Shipping</h4>
              <div className="liShipping">
                <ul>
                  <li>Delivery</li>
                  <li>Collect</li>
                  <li>Tracking</li>
                </ul>
              </div>
            </div>

            <div className="innerVisitUs">
              <h4>Visit us</h4>
              <div className="liVisitUs">
                <ul>
                  <li>Store Location</li>
                  <li>Sevice</li>
                  <li>In-Store Service </li>
                </ul>
              </div>
            </div>

            <div className="innerJoinUs">
              <h4>Join us</h4>
              <div className="liJoinUs">
                <ul>
                  <li>Log In</li>
                  <li>Sign Up</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerInnerSecond">
            <a href="https://instagram.com/sambaegplus?utm_medium=copy_link">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
