import React from 'react';
import './OptionModal.scss';

const optionModal = props => {
  const selectSize = e => {
    if (props.size) {
      props.setSize(e.target.innerText);
      props.setIsShow(!props.isSizeShow);
    }
    if (props.quan) {
      props.setQuantity(e.target.innerText);
      props.setIsShow(!props.isQuantityShow);
    }
  };
  return (
    <div className={`optionModal ${props.quan && 'on'}`}>
      <ul onClick={selectSize}>
        {props.size ? (
          <>
            <li>15 ml / 0.5 fl oz</li>
            <li>50 ml / 1.7 fl oz</li>
            <li>100 ml / 3.4 fl oz</li>
            <li>500 ml / 16.9 fl oz</li>
          </>
        ) : (
          <>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default optionModal;
