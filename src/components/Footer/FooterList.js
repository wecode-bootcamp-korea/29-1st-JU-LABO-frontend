import React from 'react';
import './FooterList.scss';

const FooterList = ({ list }) => {
  return (
    <div className="innerList">
      <h4>{list.name}</h4>
      <div className="liList">
        <ul>
          <li>{list.first}</li>
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
