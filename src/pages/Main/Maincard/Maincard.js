import React from 'react';
import { Link } from 'react-router-dom';
import './Maincard.scss';

const Maincard = ({
  linkTo,
  linkClassName,
  imgSrc,
  imgClassName,
  title,
  paragraph,
}) => {
  return (
    <Link to={linkTo} className={'mainCard ' + linkClassName}>
      <div className={imgClassName}>
        <img src={imgSrc} alt={imgClassName} />
      </div>
      <h3>{title}</h3>
      <h4>{paragraph}</h4>
    </Link>
  );
};

export default Maincard;
