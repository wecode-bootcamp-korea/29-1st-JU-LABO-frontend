import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ListFilter from './ListFilter/ListFilter';
import ProductCard from './ProductCard/ProductCard';
import { api } from '../../api/config';
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
      api.fetchProductList + `?category_subcategory_id=${params.category_id}`
    )
      .then(res => res.json())
      .then(data => {
        setProductData(data.products);
      });
  }, [params.category_id]);

  useEffect(() => {
    Promise.all(
      selectedFilters.map(ml =>
        fetch(
          api.fetchProductList +
            `?category_subcategory_id=${params.category_id}&ml=${parseInt(ml)}`
        )
      )
    )
      .then(res => Promise.all(res.map(item => item.json())))
      .then(res => res.map(data => data.products))
      .then(arr => setFilteredProductData([].concat.apply([], arr)));
  }, [selectedFilters, params.category_id]);

  const handleFilterOutsideClick = e => {
    if (isfilterModalActive && !modalRef.current.contains(e.target)) {
      setIsfilterModalActive(!isfilterModalActive);
    }
  };

  return (
    <div className="productList" onClick={handleFilterOutsideClick}>
      <ProductListHeader
        params={params}
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
        />
        <ul className="listContainer">
          {filteredProductData.length === 0 && productData.length > 0
            ? productData.map(data => <ProductCard key={data.id} data={data} />)
            : filteredProductData.map(data => (
                <ProductCard key={data.id} data={data} />
              ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
