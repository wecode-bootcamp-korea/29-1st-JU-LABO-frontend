import React from 'react';
import './MainSection.scss';

const MainSection = ({ className, title, desc, children }) => {
  return (
    <section className={'mainSection ' + className}>
      <h1>{title}</h1>
      <h2>{desc}</h2>
      {children}
    </section>
  );
};

export default MainSection;
