import React from 'react';
import './InputForm.scss';

const InputForm = ({ name, id, loginInfo, setloginInfo, label }) => {
  const inputHandler = e => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };
  return (
    <div className="inputForm">
      <label className="labelForm" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={loginInfo[name]}
        className="inputForm"
        type={id}
        onChange={inputHandler}
      />
    </div>
  );
};

export default InputForm;
