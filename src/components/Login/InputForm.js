import React from 'react';
import './InputForm.scss';

const InputForm = ({ loginInfo, setloginInfo, list }) => {
  const inputHandler = e => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginInputForm">
      <label className="labelForm" htmlFor={list.id}>
        {list.label}
      </label>
      <input
        id={list.id}
        name={list.name}
        value={loginInfo[list.name]}
        className="inputForm"
        type={list.type}
        onChange={inputHandler}
      />
    </div>
  );
};

export default InputForm;
