import React from 'react';
import './FilterModal.scss';

const FilterModal = ({
  isfilterModalActive,
  modalRef,
  handleFilterItemClick,
}) => {
  return (
    <aside
      className={isfilterModalActive ? 'filterModal active' : 'filterModal'}
      ref={modalRef}
    >
      <ul>
        <li name="200ml" onClick={handleFilterItemClick}>
          200ml
        </li>
        <li name="500ml" onClick={handleFilterItemClick}>
          500ml
        </li>
        <li name="1000ml" onClick={handleFilterItemClick}>
          1000ml
        </li>
      </ul>
    </aside>
  );
};

export default FilterModal;
