import '../css/Login.css';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login(e){
    e.preventDefault();
    fetch('https://linita-unity.netlify.app/login', {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password})
    })

  }
  return (
    <div className="custom-login d-flex justify-content-center">
      <div className="align-self-center ">
        <h1 className="text-center">Welcome To</h1>
        <div className="classlogo text-center">
          <img src="../logo192.png" class="rounded-left logo-login "></img>
        </div>
        <form onSubmit={login} method="post" action="" class="login-form mb-3">
          <div class="input-container">
            <input onChange={e => setEmail(e.target.value)} type="email" class="input" name="email" placeholder="Email" />
          </div>
          <div class="input-container">
            <input onChange={e => setPassword(e.target.value)} type="password" id="login-password" class="input" name="password" placeholder="Password" />
            <i id="show-password" class="fa fa-eye"></i>
          </div>
          <button type="submit" class="btn mt-4 button-login">LOGIN</button>
        </form>

        <small id="regis" className="form-text text-muted">Belum punya akun ?</small><a href="register" className="regis-login"> Registrasi </a><br></br>
      </div>


    </div>

  );
}

export default Login;
