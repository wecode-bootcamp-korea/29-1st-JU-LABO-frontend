import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.scss';
import { api } from '../../api/config';

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    emailAddress: '',
    password: '',
  });

  const [color, setColor] = useState('color');

  const inputHandler = e => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const loginFetch = () => {
    if (loginInfo.emailAddress === '' && loginInfo.password === '') {
      setColor('red');
    } else if (loginInfo.password === '') {
      alert('Password is required!');
    } else if (loginInfo.emailAddress === '') {
      alert('Email is required!');
    } else {
      fetch(api.fetchLogin, {
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
          if (res.token) {
            sessionStorage.setItem('loginToken', res.token);
            navigate('/');
          }
        });
    }
  };

  return (
    <div>
      <div className="backgroundwrapper">
        <div className="loginwrapper">
          <h1>Login</h1>

          <div className="loginemailform">
            <label
              className="email-labelform"
              htmlFor="name"
              style={{ color: color }}
            >
              Email Address:
            </label>
            <input
              name="emailAddress"
              value={loginInfo.emailAddress}
              className="emailinput"
              type="text"
              onChange={inputHandler}
            />
          </div>

          <div className="passwordform">
            <label
              className="labelform"
              htmlFor="name"
              style={{ color: color }}
            >
              Password:
            </label>
            <input
              name="password"
              value={loginInfo.password}
              className="passwordinput"
              type="password"
              onChange={inputHandler}
            />
          </div>

          <div className="asksignup">
            <Link to="/Register">
              <button> Click here to sign up</button>
            </Link>
          </div>

          <div className="buttonwrap">
            <button className="loginbutton" onClick={loginFetch}>
              Login
            </button>
          </div>

          <p>
            Now that it's all said and done I n't believe you were the one To
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
