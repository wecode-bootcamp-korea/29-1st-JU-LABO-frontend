import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(
      'http://10.58.2.198:8002/subcategory?category_id=1&subcategory_id=2&type=20'
    )
      .then(res => res.json())
      .then(data => {
        setProductData(data.result);
      });
  }, []);

  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const modalRef = useRef();

  const handleFilterBtnClick = e => {
    if (
      e.target.getAttribute('class') === 'filterBtn' ||
      e.target.getAttribute('class') === 'filterBtn active'
    ) {
      setIsfilterModalActive(!isfilterModalActive);
    }
  };

  const handleFilterOutsideClick = e => {
    if (isfilterModalActive && !modalRef.current.contains(e.target)) {
      setIsfilterModalActive(!isfilterModalActive);
    }
  };

  const handleFilterItemClick = e => {
    const newFilter = e.target.getAttribute('name');
    if (!selectedFilter.includes(newFilter)) {
      setSelectedFilter(prev => [...prev, newFilter]);
    }
  };

  const eraseAllFilters = () => {
    setSelectedFilter([]);
  };

  return (
    <div className="ProductList" onClick={handleFilterOutsideClick}>
      <header className="header">
        <div className="headerTitle">
          <nav className="breadCrumbs">
            <span className="breadCrumbsItem">Home</span>
            <span className="breadCrumbsItem">Spring</span>
            {productData.length > 1 && (
              <span className="breadCrumbsItem">
                {productData[0].subcategoryname[0].toUpperCase() +
                  productData[0].subcategoryname.slice(1)}
              </span>
            )}
          </nav>
          {productData.length > 1 && (
            <h1>
              {productData[0].subcategoryname[0].toUpperCase() +
                productData[0].subcategoryname.slice(1)}
            </h1>
          )}
        </div>
        <button
          type="button"
          className={isfilterModalActive ? 'filterBtn active' : 'filterBtn'}
          onClick={handleFilterBtnClick}
        >
          <em>Type:</em>
          <i className="fas fa-plus" />
          <aside
            className={
              isfilterModalActive ? 'filterModal active' : 'filterModal'
            }
            ref={modalRef}
          >
            <ul>
              <li name="10ml" onClick={handleFilterItemClick}>
                10ml
              </li>
              <li name="20ml" onClick={handleFilterItemClick}>
                20ml
              </li>
              <li name="30ml" onClick={handleFilterItemClick}>
                30ml
              </li>
              <li name="40ml" onClick={handleFilterItemClick}>
                40ml
              </li>
            </ul>
          </aside>
        </button>
      </header>
      <div className="banner">
        <img
          alt="banner"
          src="https://images.unsplash.com/photo-1491591462767-3b91b2a19487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
        <h1>SPRING</h1>
      </div>
      <main className="list">
        <aside className="listFilter">
          <div className="filters">
            {selectedFilter.length > 0 && (
              <span className="filterStart">Filter: &nbsp;</span>
            )}
            {selectedFilter.map((filter, index) => (
              <span className="filterItem" key={index}>
                {filter}
              </span>
            ))}
          </div>
          <button type="button" onClick={eraseAllFilters}>
            Clear all
          </button>
        </aside>
        <ul className="listContainer">
          {productData.map(data => (
            <ProductCard key={data.product_id} data={data} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
