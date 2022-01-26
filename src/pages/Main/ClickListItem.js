import React from 'react';

const ClickListItem = ({
  selectedState,
  index,
  liClassName,
  onClick,
  data,
}) => {
  return (
    <li
      className={
        index === selectedState ? `${liClassName} active` : liClassName
      }
      index={index}
      onClick={onClick}
    >
      <div className="breweryTitle">
        <h3>{data.brewery.toUpperCase()}</h3>
        <h4>{data.location}</h4>
      </div>
      <i className="fas fa-chevron-right" />
    </li>
  );
};

export default ClickListItem;
