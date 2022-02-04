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
        <li name="10ml" onClick={handleFilterItemClick}>
          10ml
        </li>
        <li name="20ml" onClick={handleFilterItemClick}>
          20ml
        </li>
        <li name="30ml" onClick={handleFilterItemClick}>
          30ml
        </li>
        <li name="40ml" onClick={handleFilterItemClick}>
          40ml
        </li>
      </ul>
    </aside>
  );
};

export default FilterModal;
