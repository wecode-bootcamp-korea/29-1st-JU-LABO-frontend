import React from 'react';
import FilterModal from './FilterModal/FilterModal';
import { CATEGORY_TABLE } from '../CATEGORY_TABLE';
import './ProductListHeader.scss';

const ProductListHeader = ({
  params,
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

  return (
    <header className="header">
      {params !== null ? (
        <div className="headerTitle">
          <nav className="breadCrumbs">
            <span className="breadCrumbsItem">Home</span>
            <span className="breadCrumbsItem">
              {CATEGORY_TABLE[params.category_id][0]}
            </span>
            <span className="breadCrumbsItem">
              {CATEGORY_TABLE[params.category_id][1]}
            </span>
          </nav>
          <h1>{CATEGORY_TABLE[params.category_id][1]}</h1>
        </div>
      ) : (
        <div className="headerTitle">
          <h2>Search results</h2>
        </div>
      )}

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
