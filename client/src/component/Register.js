import '../css/Register.css';
import React, { useState } from 'react';
import {server} from '../server.js';

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [conPassword, setConPassword] = useState();
  const username = email;

  function register(e) {
    e.preventDefault();
    if (conPassword == password) {
      fetch(server + 'register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password})
      })
      .then(isi => isi.json()).then(isi => console.log(isi.auth, isi.user))
    }
  }

  return (
    <div className="custom-register d-flex justify-content-center">
      <div className="align-self-center ">
        <h3 className="text-center">Create An Account</h3>
        <div className="classlogo text-center">
          <img src="../logo192.png" class="rounded-left logo-register "></img>
        </div>
        <form method="post" action="" onSubmit={register} class="register-form mb-3">
          <div class="input-container">
            <input onChange={e => setEmail(e.target.value)} type="email" class="input" name="email" placeholder="Email" />
          </div>
          <div class="input-container">
            <input onChange={e => setPassword(e.target.value)} type="password" id="register-password" class="input" name="password" placeholder="Password" />
            <i id="show-password" class="fa fa-eye"></i>
          </div>
          <div class="input-container">
            <input onChange={e => setConPassword(e.target.value)} type="password" id="register-password" class="input" name="password" placeholder="Current Password" />
            <i id="show-password" class="fa fa-eye"></i>
          </div>
          <button type="submit" class="btn mt-4 button-register">REGISTER</button>
        </form>

        <small id="regis" className="form-text text-muted">Sudah punya akun ?</small><a href="login" className="regis-register"> Login </a><br></br>
      </div>


    </div>

  );
}

export default Register;
