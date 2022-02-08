import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss';

const Category = ({ name, param }) => {
  const navigate = useNavigate();

  const goToList = e => {
    const addNum = e.target.getAttribute('order');
    navigate(`/products/${+param + Number(addNum)}`);
  };

  return (
    <div className="categoryItem">
      {name}
      <div className="categoryExpand">
        <img
          className="categoryExpandImage"
          src={`/images/${name}.jpeg`}
          alt={`${name} drinks`}
        />
        <div className="categoryExpandWrapper">
          <div className="categoryExpandHead">{name}</div>
          <div className="categoryExpandDrinks">
            <div onClick={goToList} order="1">
              Sake
            </div>
            <div onClick={goToList} order="2">
              Soju
            </div>
            <div onClick={goToList} order="3">
              Makgeolli
            </div>
            <div onClick={goToList} order="4">
              Beer
            </div>
            <div onClick={goToList} order="5">
              Wine
            </div>
            <div onClick={goToList} order="6">
              Spirits
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
