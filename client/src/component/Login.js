import '../css/Login.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import {server} from '../server.js';

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

  function login(e){
    e.preventDefault();
    if(!props.loading) {
      props.setLoading(true);
      fetch(server + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({email, password})
      })
      .then(response => {
        if(response.status == 401) {
          throw new Error('Email atau password yang anda masukkan salah');
        } else {
          return response.json();
        } 
      })
      .then(data => {
        props.setAutentikasi(data);
        history.push('/');
        props.setLoading(false);
      })
      .catch(e => { 
        setError(e.message);
        props.setLoading(false); 
      });
    }
  }

  
  return (
    <div className="custom-login d-flex justify-content-center align-items-center">
      <div className="">
        <h3 className="text-center">Masuk Akun</h3>
        <div className="classlogo text-center my-3 mb-5">
          <a href="/"><img src="/asset/logo-dark.png" className="logo-login"></img></a>
        </div>
        <div className="text-center"><small style={{ color: 'red' }}>{ error }</small></div>
        <form  onSubmit={login}  method="post" className="login-form mb-3">
          <div className="form-floating mb-3">
            <input onChange={e => setEmail(e.target.value)} type="email" name="email" className="form-control custom-input shadow-none" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} name="password" className="form-control custom-input shadow-none" id="password" placeholder="your password" />
            <label htmlFor="password">Password</label>
            {
              showPassword
                ? <div className="show-hide-password" onClick={(e) => { setShowPassword(false) }}><i className="far fa-eye"></i></div>
                : <span className="show-hide-password" onClick={(e) => { setShowPassword(true) }}><i className="far fa-eye-slash"></i></span>
            }
          </div>
          <button type="submit" className={"btn my-5 button-login " + (props.loading && "button--loading")}><span style={{visibility: props.loading ? 'hidden' : undefined}}>LOGIN</span></button>
        </form>
        <small id="regis" className="form-text text-muted">Belum punya akun ?</small><a href="/register" className="regis-login"> Register </a><br></br>
      </div>
    </div>

  );
}

export default Login;
