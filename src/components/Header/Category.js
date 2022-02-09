import React from 'react';
import './Category.scss';
import CategoryList from './CategoryList';
import { CATEGORY_LIST_DATA } from './CATEGORY_LIST_DATA';

const Category = ({ name }) => {
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
          {CATEGORY_LIST_DATA.map((data, index) => (
            <CategoryList key={index} id={index} drinks={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
