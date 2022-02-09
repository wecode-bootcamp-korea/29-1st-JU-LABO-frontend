import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import './Register.scss';

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const registerFetch = () => {
    if (
      registerInfo.firstName === '' &&
      registerInfo.lastName === '' &&
      registerInfo.emailAddress === '' &&
      registerInfo.password === ''
    ) {
      alert('Fill the requirement!');
    } else if (registerInfo.firstName === '') {
      alert('FirstName is required!');
    } else if (registerInfo.lastName === '') {
      alert('LastName is required!');
    } else if (registerInfo.emailAddress === '') {
      alert('Email is required!');
    } else if (registerInfo.password === '') {
      alert('Password is required!');
    } else {
      fetch(`http://10.58.2.192:8000/users/signup`, {
        method: 'POST',
        body: JSON.stringify({
          first_name: registerInfo.emailAddress,
          last_name: registerInfo.password,
          email: registerInfo.emailAddress,
          password: registerInfo.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'EMAIL_ALREADY_EXISTS') {
            alert('이미 존재하는 이메일입니다!');
          } else if (res.message === 'INVALID_EMAIL') {
            alert('이메일 양식에 맞지 않습니다 !');
          } else if (res.message === 'INVALID_PASSWORD') {
            alert('비밀번호가 양식에 맞지 않습니다!');
          }
        });
    }
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
            <Link to="/Login">
              <button className="registerButton" onClick={registerFetch}>
                Register
              </button>
            </Link>
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
