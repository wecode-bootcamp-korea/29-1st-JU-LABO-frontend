import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputForm from './InputForm';
import './Login.scss';

function Login() {
  const [loginInfo, setloginInfo] = useState({
    emailAddress: '',
    password: '',
  });

  const loginFetch = () => {
    if (loginInfo.emailAddress === '' && loginInfo.password === '') {
      alert('Password is required!');
    } else if (loginInfo.password === '') {
      alert('Password is required!');
    } else if (loginInfo.emailAddress === '') {
      alert('Email is required!');
    } else {
      fetch(`http://10.58.2.192:8000/users/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: loginInfo.emailAddress,
          password: loginInfo.password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'INVALID_PASSWORD') {
            alert('비밀번호가 올바르지 않습니다!');
          } else if (res.message === 'INVALID_EMAIL') {
            alert('이메일이 올바르지 않습니다!');
          }
          if (res.token)
            sessionStorage.setItem('login', JSON.stringify(res.token));
        });
    }
  };

  return (
    <div>
      <div className="backgroundWrapper">
        <div className="formWrapper">
          <h1>Login</h1>
          <div className="inputWrapper">
            <InputForm
              label="Email Address:"
              name="emailAddress"
              id="email"
              loginInfo={loginInfo}
              setloginInfo={setloginInfo}
            />
            <div className="passwordInput">
              <InputForm
                label="Password:"
                name="password"
                id="password"
                loginInfo={loginInfo}
                setloginInfo={setloginInfo}
              />
            </div>
          </div>

          <div className="askSignup">
            <Link to="/Register">
              <button> Click here to sign up</button>
            </Link>
          </div>
          <div className="buttonWrap">
            <Link to="/">
              <button className="loginButton" onClick={loginFetch}>
                Login
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

export default Login;

<InputForm name="emailAddress" id="email" />;
