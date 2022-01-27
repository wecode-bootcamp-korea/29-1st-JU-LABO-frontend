import React from 'react';

const ClickListItem = ({ selectedState, index, onClick, data }) => {
  return (
    <li
      className={
        index === selectedState ? `clickListItem active` : 'clickListItem'
      }
      index={index}
      onClick={onClick}
    >
      <div className="clickListItemTitle">
        <h3>{data.brewery.toUpperCase()}</h3>
        <h4>{data.location}</h4>
      </div>
      <i className="fas fa-chevron-right" />
    </li>
  );
};

export default ClickListItem;
