import React from 'react';
import FooterList from './FooterList';
import { FOOTER_LIST } from '../../FooterLists/FOOTER_LIST';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInnerWrapper">
        <div className="footerInner">
          {FOOTER_LIST.map(ele => (
            <FooterList list={ele} key={ele.id} />
          ))}
        </div>
        <div className="footerInnerSecond">
          <a href="https://instagram.com/sambaegplus?utm_medium=copy_link">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
