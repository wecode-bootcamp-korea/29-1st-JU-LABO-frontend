import React from 'react';
import './RegisterForm.scss';

const RegisterForm = ({ name, id, registerInfo, setRegisterInfo, label }) => {
  const inputHandler = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="inputForm">
      <label className="labelForm" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        value={registerInfo[name]}
        className="inputForm"
        type={id}
        onChange={inputHandler}
      />
    </div>
  );
};

export default RegisterForm;
