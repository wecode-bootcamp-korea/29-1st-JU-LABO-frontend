import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const handleFilterBtnClick = e => {
    if (
      e.target.getAttribute('class') === 'filterBtn' ||
      e.target.getAttribute('class') === 'filterBtn active'
    ) {
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
    <div className="ProductList">
      <header className="header">
        <div className="headerTitle">
          <nav className="breadCrumbs">Home / Spring</nav>
          <h1>Spring</h1>
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
          >
            <ul>
              <li name="Wine" onClick={handleFilterItemClick}>
                Wine
              </li>
              <li name="Beer" onClick={handleFilterItemClick}>
                Beer
              </li>
              <li name="Spirits" onClick={handleFilterItemClick}>
                Spirits
              </li>
              <li name="Soju" onClick={handleFilterItemClick}>
                Soju
              </li>
              <li name="Sake" onClick={handleFilterItemClick}>
                Sake
              </li>
              <li name="Makgeolli" onClick={handleFilterItemClick}>
                Makgeolli
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
          <div class="filters">
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
