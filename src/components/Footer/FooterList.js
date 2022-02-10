import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.scss';

const FooterList = ({ list }) => {
  return (
    <div className="innerList">
      <h4>{list.name}</h4>
      <div className="liList">
        <ul>
          {list.first === 'About Us' ? (
            <Link to="/aboutus">{list.first}</Link>
          ) : (
            <li>{list.first}</li>
          )}
          <li>{list.second}</li>
          <li>{list.third}</li>
          <li>{list.fourth}</li>
          <li>{list.fivth}</li>
          <li>{list.sixth}</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
