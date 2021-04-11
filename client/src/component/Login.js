import {server} from '../server.js';
import '../css/Login.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  function login(e){
    e.preventDefault();
    fetch(server + 'login', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
      body: JSON.stringify({email, password})
    })
    .then(isi => isi.json()).then(isi => {
      if(isi.auth==true){
        history.push('/');
      }
    })
  }

  return (
    <div className="custom-login d-flex justify-content-center align-items-center">
      <div className="">
        <h3 className="text-center">Masuk Akun</h3>
        <div className="classlogo text-center">
          <img src="../logo192.png" className="rounded-left logo-login "></img>
        </div>
        <form  onSubmit={login}  method="post" action="" className="login-form mb-3">
          <div className="form-floating mb-3">
            <input onChange={e => setEmail(e.target.value)} type="email" name="email" className="form-control custom-input shadow-none" id="email" placeholder="name@example.com" />
            <label for="email">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} name="password" className="form-control custom-input shadow-none" id="password" placeholder="your password" />
            <label for="password">Password</label>
            {
              showPassword
                ? <div className="show-hide-password" onClick={(e) => { setShowPassword(false) }}><i className="far fa-eye"></i></div>
                : <span className="show-hide-password" onClick={(e) => { setShowPassword(true) }}><i className="far fa-eye-slash"></i></span>
            }
          </div>
          <button type="submit" className="btn my-5 button-login">LOGIN</button>
        </form>
        <small id="regis" className="form-text text-muted">Belum punya akun ?</small><a href="/register" className="regis-login"> Register </a><br></br>
      </div>
    </div>

  );
}

export default Login;
