import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryList.scss';

const CategoryList = ({ drinks, param }) => {
  const navigate = useNavigate();

  const goToList = e => {
    const addNum = e.target.getAttribute('order');
    navigate(`/products/${+param + Number(addNum)}`);
  };

  return (
    <div className="categoryExpandDrinks">
      <div onClick={goToList} order={drinks.order}>
        {drinks.name}
      </div>
    </div>
  );
};

export default CategoryList;
