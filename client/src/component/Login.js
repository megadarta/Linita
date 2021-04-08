import { useState } from 'react';
import '../css/Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="custom-login d-flex justify-content-center align-items-center">
      <div className="">
        <h3 className="text-center">Masuk Akun</h3>
        <div className="classlogo text-center">
          <img src="../logo192.png" class="rounded-left logo-login "></img>
        </div>
        <form method="post" action="" class="login-form mb-3">
          <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control custom-input shadow-none" id="email" placeholder="name@example.com" />
            <label for="email">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" name="password" class="form-control custom-input shadow-none" id="password" placeholder="your password" />
            <label for="password">Password</label>
            {
              showPassword 
              ? (<span onClick={(e) => setShowPassword(false)}><i className="far fa-eye show-hide-password"></i></span>)
              : (<span onClick={(e) => setShowPassword(true)}><i class="far fa-eye-slash show-hide-password"></i></span>)
            }
          </div>
          <button type="submit" class="btn my-5 button-login">LOGIN</button>
        </form>
        <small id="regis" className="form-text text-muted">Belum punya akun ?</small><a href="/register" className="regis-login"> Register </a><br></br>
      </div>
    </div>

  );
}

export default Login;
