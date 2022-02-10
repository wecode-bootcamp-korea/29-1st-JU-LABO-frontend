import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ProductListHeader from '../ProductListHeader/ProductListHeader';
import ListFilter from '../ListFilter/ListFilter';
import ProductCard from '../ProductCard/ProductCard';
import { api } from '../../../api/config';
import './SearchList.scss';

const SearchList = () => {
  const location = useLocation();
  const modalRef = useRef();

  const [productData, setProductData] = useState([]);
  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetch(api.fetchProductList + location.search)
      .then(res => res.json())
      .then(data => {
        setProductData(data.products);
      });
  }, [location]);

  let filteredProductData = productData.filter(
    x => selectedFilters.indexOf(x.ml + 'ml') !== -1
  );

  const handleFilterOutsideClick = e => {
    if (isfilterModalActive && !modalRef.current.contains(e.target)) {
      setIsfilterModalActive(!isfilterModalActive);
    }
  };

  return (
    <div className="searchList" onClick={handleFilterOutsideClick}>
      <ProductListHeader
        params={null}
        productData={productData}
        isfilterModalActive={isfilterModalActive}
        setIsfilterModalActive={setIsfilterModalActive}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        modalRef={modalRef}
      />

      <main className="list">
        <ListFilter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        <aside className="indicatorTotal">
          {productData.length !== 0
            ? productData.length +
              ` results for "${location.search.slice(
                location.search.indexOf('=') + 1
              )}"`
            : 'No results...'}
        </aside>
        <ul className="listContainer">
          {productData.length !== 0 &&
            selectedFilters.length === 0 &&
            productData.map(data => <ProductCard key={data.id} data={data} />)}
          {selectedFilters.length !== 0 &&
            filteredProductData.map(data => (
              <ProductCard key={data.id} data={data} />
            ))}
        </ul>
      </main>
    </div>
  );
};

export default SearchList;
