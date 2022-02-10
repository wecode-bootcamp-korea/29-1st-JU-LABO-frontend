import React from 'react';

const AboutUsMember = ({ name, handleNameClick, selectedName }) => {
  return (
    <li
      name={name}
      onClick={handleNameClick}
      className={selectedName === name ? 'memberItem active' : 'memberItem'}
    >
      {name}
    </li>
  );
};

export default AboutUsMember;
