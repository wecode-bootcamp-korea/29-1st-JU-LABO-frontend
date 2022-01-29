import React, { useState, useEffect } from 'react';
import './OptionModal.scss';

const OptionModal = ({
  productInfo,
  setProductInfo,
  size,
  setSize,
  setIsShow,
  isSizeShow,
  quan,
  isQuantityShow,
  setQuantity,
}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/data.json')
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });
  }, []);

  const selectSize = e => {
    const findInfo = products.filter(
      product => product.ml === Number(e.target.innerText)
    );
    if (findInfo) {
      setProductInfo(...findInfo);
    }
    if (size) {
      setSize(e.target.innerText);
      setIsShow(!isSizeShow);
    }
  };

  const selectCount = e => {
    if (quan) {
      setQuantity(e.target.innerText);
      setIsShow(!isQuantityShow);
    }
  };
  return (
    <div className={`optionModal ${quan && 'on'}`}>
      {size ? (
        products
          .map(product => product.ml)
          .map(ml => (
            <ul onClick={selectSize} key={ml}>
              <li>{ml}</li>
            </ul>
          ))
      ) : (
        <ul onClick={selectCount}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      )}
    </div>
  );
};

export default OptionModal;
