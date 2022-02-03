import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ListFilter from './ListFilter/ListFilter';
import ProductCard from './ProductCard/ProductCard';
import './ProductList.scss';

const ProductList = () => {
  const params = useParams();
  const modalRef = useRef();

  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

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

  const handleFilterOutsideClick = e => {
    if (isfilterModalActive && !modalRef.current.contains(e.target)) {
      setIsfilterModalActive(!isfilterModalActive);
    }
  };

  return (
    <div className="ProductList" onClick={handleFilterOutsideClick}>
      <ProductListHeader
        params={params}
        productData={productData}
        isfilterModalActive={isfilterModalActive}
        setIsfilterModalActive={setIsfilterModalActive}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        modalRef={modalRef}
      />

      <ProductListBanner params={params} />

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
