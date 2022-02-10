import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.scss';
import CategoryList from './CategoryList';
import { CATEGORY_LIST_DATA } from './CATEGORY_LIST_DATA';
import { api } from '../../api/config';

const Category = ({ name, param }) => {
  const [popularProducts, setPopularProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(api.fetchProductList + '?ordering=-count')
      .then(res => res.json())
      .then(res => setPopularProducts(res.products));
  }, []);

  const goToProduct = e => {
    const productId = e.target.getAttribute('data-id');
    navigate(`/product/${productId}`);
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
          {CATEGORY_LIST_DATA.map(data => (
            <CategoryList key={data.id} drinks={data} param={param} />
          ))}
        </div>
        <div className="divider" />
        <ul className="popularList">
          <h1 className="categoryExpandHead">Popular Products</h1>
          {popularProducts.map(item => (
            <li key={item.id} className="categoryExpandDrinks">
              <div data-id={item.id} onClick={goToProduct}>
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
