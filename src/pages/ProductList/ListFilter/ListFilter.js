import React from 'react';
import './ListFilter.scss';

const ListFilter = ({
  selectedFilters,
  setSelectedFilters,
  filteredProductData,
  setFilteredProductData,
}) => {
  const removeOneFilter = e => {
    const newSelectedFilters = selectedFilters.filter(
      item => item !== e.target.innerHTML
    );
    setSelectedFilters(newSelectedFilters);

    const newFilteredProductData = filteredProductData.filter(
      item => item.ml !== parseInt(e.target.innerHTML)
    );
    setFilteredProductData(newFilteredProductData);
  };

  const eraseAllFilters = () => {
    setSelectedFilters([]);
    setFilteredProductData([]);
  };

  return (
    <aside className="listFilter">
      <div className="filters">
        {selectedFilters.length > 0 && (
          <span className="filterStart">Filter:</span>
        )}
        {selectedFilters.map((filter, index) => (
          <span className="filterItem" key={index} onClick={removeOneFilter}>
            {filter}
          </span>
        ))}
      </div>
      <button type="button" onClick={eraseAllFilters}>
        Clear all
      </button>
    </aside>
  );
};

export default ListFilter;
