import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from './InputForm';
import './Login.scss';
import { error } from '../../error/error';
import { LOGIN_FORM_DATA } from './LOGIN_FORM_DATA';

function Login() {
  const [loginInfo, setloginInfo] = useState({
    emailAddress: '',
    password: '',
  });

  const navigate = useNavigate();
  const { emailAddress, password } = loginInfo;

  const loginFetch = () => {
    fetch(`http://10.58.2.192:8000/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: emailAddress,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          sessionStorage.setItem('login', JSON.stringify(res.token));
          return navigate('/');
        }
        if (res.message === error[res.message].name) {
          alert(error[res.message].desc);
        }
        return;
      });
  };

  return (
    <div>
      <div className="backgroundWrapper">
        <div className="formWrapper">
          <h1>Login</h1>

          <div className="inputWrapper">
            {LOGIN_FORM_DATA.map((data, index) => (
              <InputForm
                key={index}
                list={data}
                loginInfo={loginInfo}
                setloginInfo={setloginInfo}
              />
            ))}
          </div>

          <div className="askSignup">
            <Link to="/Register">
              <button> Click here to sign up</button>
            </Link>
          </div>
          <div className="buttonWrap">
            <button className="loginButton" onClick={loginFetch}>
              Login
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

export default Login;
