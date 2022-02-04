import React from 'react';
import FilterModal from './FilterModal/FilterModal';
import './ProductListHeader.scss';

const ProductListHeader = ({
  params,
  productData,
  isfilterModalActive,
  setIsfilterModalActive,
  selectedFilters,
  setSelectedFilters,
  modalRef,
}) => {
  const handleFilterBtnClick = e => {
    if (e.target.getAttribute('class') === 'filterBtn') {
      setIsfilterModalActive(!isfilterModalActive);
    }
  };

  const handleFilterItemClick = e => {
    const newFilter = e.target.getAttribute('name');
    if (!selectedFilters.includes(newFilter)) {
      setSelectedFilters([...selectedFilters, newFilter]);
    }
  };

  const SEASON_DATA = ['Spring', 'Summer', 'Autumn', 'Winter'];

  return (
    <header className="header">
      <div className="headerTitle">
        <nav className="breadCrumbs">
          <span className="breadCrumbsItem">Home</span>
          <span className="breadCrumbsItem">
            {SEASON_DATA[params.category_id - 1]}
          </span>
          {productData.length > 0 && (
            <span className="breadCrumbsItem">
              {productData[0].subcategoryname[0].toUpperCase() +
                productData[0].subcategoryname.slice(1)}
            </span>
          )}
        </nav>
        {productData.length > 0 && (
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
        <FilterModal
          isfilterModalActive={isfilterModalActive}
          modalRef={modalRef}
          handleFilterItemClick={handleFilterItemClick}
        />
      </button>
    </header>
  );
};

export default ProductListHeader;
