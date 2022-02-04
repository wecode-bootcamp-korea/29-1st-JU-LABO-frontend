import React from 'react';

const ClickImages = ({ index, selectedState, data }) => {
  return (
    <div
      className={
        index === selectedState
          ? `clickListImageBlock active`
          : 'clickListImageBlock'
      }
    >
      <img className="clickListImage" src={data.image} alt={data.brewery} />
      <p className="clickListImgDescription">{data.description}</p>
    </div>
  );
};

export default ClickImages;
