import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
import ListFilter from './ListFilter/ListFilter';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const modalRef = useRef();

  useEffect(() => {
    fetch(
      `http://10.58.2.198:8002/subcategory?category_id=${params.category_id}&subcategory_id=${params.subcategory_id}`
    )
      .then(res => res.json())
      .then(data => {
        setProductData(data.result);
      });
  }, []);

  useEffect(() => {
    if (selectedFilters.length > 0) {
      fetch(
        `http://10.58.2.198:8002/subcategory?category_id=${
          params.category_id
        }&subcategory_id=${params.subcategory_id}&type=${
          selectedFilters[selectedFilters.length - 1]
        }`
      )
        .then(res => res.json())
        .then(data => {
          setFilteredProductData([...filteredProductData, data.result]);
        });
    }
  }, []);

  const handleFilterBtnClick = e => {
    if (e.target.getAttribute('class') === 'filterBtn') {
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
    if (!selectedFilters.includes(newFilter)) {
      setSelectedFilters([...selectedFilters, newFilter]);
    }
  };

  return (
    <div className="ProductList" onClick={handleFilterOutsideClick}>
      <header className="header">
        <div className="headerTitle">
          <nav className="breadCrumbs">
            <span className="breadCrumbsItem">Home</span>
            <span className="breadCrumbsItem">Spring</span>
            {productData != 0 && (
              <span className="breadCrumbsItem">
                {productData[0].subcategoryname[0].toUpperCase() +
                  productData[0].subcategoryname.slice(1)}
              </span>
            )}
          </nav>
          {productData != 0 && (
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
        <ListFilter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          setFilteredProductData={setFilteredProductData}
        />
        <ul className="listContainer">
          {selectedFilters.length === 0
            ? productData.map(data => (
                <ProductCard key={data.product_id} data={data} />
              ))
            : filteredProductData.map(data => (
                <ProductCard key={data.product_id} data={data} />
              ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
