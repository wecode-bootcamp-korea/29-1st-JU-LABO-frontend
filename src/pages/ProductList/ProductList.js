import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListBanner from './ProductListBanner/ProductListBanner';
import ListFilter from './ListFilter/ListFilter';
import ProductCard from './ProductCard/ProductCard';
import { CATEGORY_TABLE } from './CATEGORY_TABLE';
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
      // `http://172.16.100.203:8002/categories/product?category_subcategory_id=${params.category_id}`
      `http://172.16.100.203:8002/categories/product?category_subcategory_id=1`
    )
      .then(res => res.json())
      .then(data => {
        setProductData(data.products);
      });
  }, [params.category_id]);

  // useEffect(() => {
  //   if (selectedFilters.length > 0) {
  //     fetch(
  //       `http://10.58.2.198:8002/subcategory?category_id=${
  //         params.category_id
  //       }&subcategory_id=${params.subcategory_id}&type=${parseInt(
  //         selectedFilters[selectedFilters.length - 1]
  //       )}`
  //     )
  //       .then(res => res.json())
  //       .then(data => {
  //         setFilteredProductData([...filteredProductData, data.result]);
  //       });
  //   }
  // }, [
  //   selectedFilters,
  //   params.category_id,
  //   params.subcategory_id,
  //   filteredProductData,
  // ]);

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
          {productData.length &&
            productData.map(data => <ProductCard key={data.id} data={data} />)}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
