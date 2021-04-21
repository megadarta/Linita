import '../css/Register.css';
import React, { useState } from 'react';
import {server} from '../server.js';
import { useHistory } from 'react-router';

function Register(props) {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmationPass, setShowconfirmationPass] = useState(false);
  const history = useHistory();
  
  function register(e) {
    e.preventDefault();
    if (conPassword == password) {
      props.setLoading(true);
      fetch(server + 'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password})
      })
      .then(response => response.json())
      .then(data => {
        props.setAutentikasi(data);
        history.push('/');
        props.setLoading(false);
      })
    }
  }

  return (
    <div className="custom-register d-flex justify-content-center">
      <div className="align-self-center ">
        <h3 className="text-center">Buat Akun</h3>
        <div className="classlogo text-center my-3 mb-5">
          <a href="/"><img src="/asset/logo-dark.png" className="logo-login"></img></a>
        </div>
        <form method="post" action="" onSubmit={register} className="register-form mb-3">
          <div className="form-floating mb-3">
            <input onChange={e => setEmail(e.target.value)} type="email" name="email" className="form-control custom-input shadow-none" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={e => setUsername(e.target.value)} type="text" name="username" className="form-control custom-input shadow-none" id="username" placeholder="your username" />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} name="password" className="form-control custom-input shadow-none" id="password" placeholder="your password" />
            <label htmlFor="password">Password</label>
            {
              showPassword
                ? <div className="show-hide-password" onClick={(e) => { setShowPassword(false) }}><i className="far fa-eye"></i></div>
                : <span className="show-hide-password" onClick={(e) => { setShowPassword(true) }}><i className="far fa-eye-slash"></i></span>
            }
          </div>
          <div className="form-floating">
            <input onChange={e => setConPassword(e.target.value)} type={showconfirmationPass ? "text" : "password"} name="confirm-password" className="form-control custom-input shadow-none" id="confirm-password" placeholder="retype your password" />
            <label htmlFor="confirm-password">Confirm Password</label>
            {
              showconfirmationPass
                ? <div className="show-hide-password" onClick={(e) => { setShowconfirmationPass(false) }}><i className="far fa-eye"></i></div>
                : <span className="show-hide-password" onClick={(e) => { setShowconfirmationPass(true) }}><i className="far fa-eye-slash"></i></span>
            }
          </div>
          <button type="submit" className="btn my-5 button-register">REGISTER</button>
        </form>

        <small id="regis" className="form-text text-muted">Sudah punya akun ?</small><a href="login" className="regis-register"> Login </a><br></br>
      </div>


    </div>

  );
}

export default Register;
