import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import './Register.scss';
import { ERROR_MESSAGE } from '../../error/ERROR_MESSAGE';
import { REGISTER_FORM_DATA } from './REGISTER_FORM_DATA';
import { api } from '../../api/config';

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

    if (!allText) {
      return false;
    } else {
      return true;
    }
  };

  const registerFetch = () => {
    if (validationInput()) {
      fetch(api.fetchSignup, {
        method: 'POST',
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: emailAddress,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message !== 'SUCCESS') {
            alert(ERROR_MESSAGE[res.message]);
          } else {
            navigate('/login');
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
              {REGISTER_FORM_DATA.map(data => (
                <RegisterForm
                  key={data.id}
                  list={data}
                  registerInfo={registerInfo}
                  setRegisterInfo={setRegisterInfo}
                />
              ))}
            </div>
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
