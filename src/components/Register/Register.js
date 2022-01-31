import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const [color, setColor] = useState('color');

  const inputHandler = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value });
  };

  const registerFetch = () => {
    if (
      registerInfo.firstName === '' &&
      registerInfo.lastName === '' &&
      registerInfo.emailAddress === '' &&
      registerInfo.password === ''
    ) {
      setColor('red');
    } else if (registerInfo.firstName === '') {
      alert('Password is required!');
    } else if (registerInfo.lastName === '') {
      alert('Email is required!');
    } else if (registerInfo.emailAddress === '') {
      alert('Email is required!');
    } else if (registerInfo.password === '') {
      alert('Email is required!');
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
    <div>
      <div className="backgroundwrapper">
        <div className="register-wrapper">
          <h1>NEW CLIENTS</h1>

          <div className="firstnameform">
            <label className="labelform" htmlFor="name">
              First Name:
            </label>
            <input
              name="firstName"
              className="firstnameinput"
              type="text"
              value={registerInfo.firstName}
              style={{ color: color }}
              onChange={inputHandler}
            />
          </div>

          <div className="lastnameform">
            <label className="labelform" htmlFor="name">
              Last Name:
            </label>
            <input
              name="lastName"
              className="lastnameinput"
              type="text"
              value={registerInfo.lastName}
              style={{ color: color }}
              onChange={inputHandler}
            />
          </div>

          <div className="emailform">
            <label
              className="email-labelform"
              htmlFor="name"
              style={{ color: color }}
            >
              Email Address:
            </label>
            <input
              name="emailAddress"
              className="emailinput"
              type="text"
              value={registerInfo.emailAddress}
              onChange={inputHandler}
            />
          </div>

          <div className="passwordform">
            <label className="labelform" htmlFor="name">
              Password:
            </label>
            <input
              name="password"
              className="passwordinput"
              type="text"
              value={registerInfo.password}
              style={{ color: color }}
              onChange={inputHandler}
            />
          </div>

          <div className="buttonwrap">
            <Link to="/Login">
              <button className="registerbutton" onClick={registerFetch}>
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
