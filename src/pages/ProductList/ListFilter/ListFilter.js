import React from 'react';
import './ListFilter.scss';

const ListFilter = ({
  selectedFilters,
  setSelectedFilters,
  setFilteredProductData,
}) => {
  const eraseAllFilters = () => {
    setSelectedFilters([]);
    setFilteredProductData([]);
  };

  return (
    <aside className="listFilter">
      <div className="filters">
        {selectedFilters.length > 0 && (
          <span className="filterStart">Filter: &nbsp;</span>
        )}
        {selectedFilters.map((filter, index) => (
          <span className="filterItem" key={index}>
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
