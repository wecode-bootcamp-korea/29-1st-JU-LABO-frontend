import React from 'react';
import './RegisterForm.scss';

const RegisterForm = ({ list, registerInfo, setRegisterInfo }) => {
  const inputHandler = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="registerForm">
      <div className="registerInputForm">
        <label className="labelForm" htmlFor={list.id}>
          {list.label}
        </label>
        <input
          id={list.id}
          name={list.name}
          value={registerInfo[list.name]}
          className="inputForm"
          type={list.type}
          onChange={inputHandler}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
