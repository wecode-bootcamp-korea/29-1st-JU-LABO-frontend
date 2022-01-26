import React from 'react';

const ClickImages = ({
  index,
  selectedState,
  wrapClassName,
  imgClassName,
  data,
}) => {
  return (
    <div
      className={
        index === selectedState ? `${wrapClassName} active` : wrapClassName
      }
    >
      <img className={imgClassName} src={data.image} alt={data.brewery} />
      <p className="breweryDescription">{data.description}</p>
    </div>
  );
};

export default ClickImages;
