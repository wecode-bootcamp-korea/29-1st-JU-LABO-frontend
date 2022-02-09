import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import './Register.scss';
import { error } from '../../error/error';

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const navigate = useNavigate();
  const { firstName, lastName, emailAddress, password } = registerInfo;

  const validationInput = () => {
    const allText = firstName && lastName && emailAddress && password;

    if (allText) {
      alert('complete!');
    } else if (firstName === '') {
      alert('FirstName is required!');
    } else if (lastName === '') {
      alert('LastName is required!');
    } else if (emailAddress === '') {
      alert('Email is required!');
    } else if (password === '') {
      alert('Password is required!');
    }
  };

  const registerFetch = () => {
    validationInput();
    fetch(`http://10.58.2.192:8000/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        first_name: emailAddress,
        last_name: password,
        email: emailAddress,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === error[res.message].name) {
          alert(error[res.message].desc);
        }
        navigate('/login');
      });
  };

  return (
    <div className="register">
      <div className="backgroundWrapper">
        <div className="registerWrapper">
          <h1>NEW CLIENTS</h1>

          <div className="registerInputWrapper">
            <div className="firstNameWrapper">
              <RegisterForm
                label="First Name:"
                name="firstName"
                id="firstName"
                registerInfo={registerInfo}
                setRegisterInfo={setRegisterInfo}
              />
            </div>
            <div className="lastNameWrapper">
              <RegisterForm
                label="Last Name:"
                name="lastName"
                id="lastName"
                registerInfo={registerInfo}
                setRegisterInfo={setRegisterInfo}
              />
            </div>

            <div className="emaillWrapper">
              <RegisterForm
                label="Email Address:"
                name="emailAddress"
                id="emailAddress"
                registerInfo={registerInfo}
                setRegisterInfo={setRegisterInfo}
              />
            </div>
            <RegisterForm
              label="Password:"
              name="password"
              id="password"
              registerInfo={registerInfo}
              setRegisterInfo={setRegisterInfo}
            />
          </div>

          <div className="buttonWrap">
            <button className="registerButton" onClick={registerFetch}>
              Register
            </button>
          </div>

          <p>
            Now that it's all said and done I can't believe you were the one To
            build me up and tear me down Like an old abandoned house And what
            you said when you left Just left me cold and out of breath I fell
            too far, was in way too deep Guess I let you get the best of me
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
