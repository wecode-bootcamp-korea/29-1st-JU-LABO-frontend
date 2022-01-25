import React from 'react';
import './Register.scss';

function Register() {
  return (
    <div>
      <div className="backgroundwrapper">
        <div className="register-wrapper">
          <h1>NEW CLIENTS</h1>

          <div className="firstnameform">
            <label className="labelform" htmlFor="name">
              First Name:
            </label>
            <input className="firstnameinput" type="text" />
          </div>

          <div className="lastnameform">
            <label className="labelform" htmlFor="name">
              Last Name:
            </label>
            <input className="lastnameinput" type="text" />
          </div>

          <div className="emailform">
            <label className="labelform" htmlFor="name">
              Email Address:
            </label>
            <input className="emailinput" type="text" />
          </div>

          <div className="passwordform">
            <label className="labelform" htmlFor="name">
              Password:
            </label>
            <input className="passwordinput" type="text" />
          </div>

          <div className="asklogin">
            <button>이미 회원이신가유? Click here to login</button>
          </div>

          <div className="buttonwrap">
            <button className="registerbutton">Register</button>
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
