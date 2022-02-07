import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ListFilter from './ListFilter/ListFilter';
import ProductCard from './ProductCard/ProductCard';
import { fetchProductList } from '../../api/config';
import './ProductList.scss';

const ProductList = () => {
  const params = useParams();
  const modalRef = useRef();

  const [productData, setProductData] = useState([]);
  const [filteredProductData, setFilteredProductData] = useState([]);
  const [isfilterModalActive, setIsfilterModalActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetch(fetchProductList + `?category_subcategory_id=${params.category_id}`)
      .then(res => res.json())
      .then(data => {
        setProductData(
          data.products
          // .sort((a, b) => a.name.localeCompare(b.name))
        );
      });
  }, [params.category_id]);

  useEffect(() => {
    if (selectedFilters.length > 0) {
      fetch(
        fetchProductList +
          `?category_subcategory_id=${params.category_id}&ml=${parseInt(
            selectedFilters[selectedFilters.length - 1]
          )}`
      )
        .then(res => res.json())
        .then(data => {
          setFilteredProductData(prev =>
            prev.concat(data.products).sort((a, b) => a.ml - b.ml)
          );
        });
    }
  }, [selectedFilters, params.category_id]);

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
          {filteredProductData.length === 0 &&
            productData.length > 0 &&
            productData.map(data => <ProductCard key={data.id} data={data} />)}
          {filteredProductData.length > 0 &&
            filteredProductData.map(data => (
              <ProductCard key={data.id} data={data} />
            ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
