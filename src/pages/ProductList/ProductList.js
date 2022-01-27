import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const handleFilterClick = () => {
    setIsfilterModalActive(!isfilterModalActive);
  };

  return (
    <div className="ProductList">
      <header className="header">
        <div class="headerTitle">
          <nav className="breadCrumbs">Home / Spring</nav>
          <h1>Spring</h1>
        </div>
        <button
          type="button"
          className={isfilterModalActive ? 'filterBtn active' : 'filterBtn'}
          onClick={handleFilterClick}
        >
          <em>Type:</em>
          <i class="fas fa-plus" />
          <aside
            className={
              isfilterModalActive ? 'filterModal active' : 'filterModal'
            }
          >
            <ul>
              <li>Wine</li>
              <li>Beer</li>
              <li>Spirits</li>
              <li>Soju</li>
              <li>Sake</li>
              <li>Makgeolli</li>
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
          <div>{}</div>
          <button type="button">Clear all</button>
        </aside>
        <ul className="listContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
