import '../css/Register.css';
import { useState } from 'react';

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="custom-register d-flex justify-content-center">
      <div className="align-self-center ">
        <h3 className="text-center">Buat Akun</h3>
        <div className="classlogo text-center">
          <img src="../logo192.png" class="rounded-left logo-register "></img>
        </div>
        <form method="post" action="" class="register-form mb-3">
        <div class="form-floating mb-3">
            <input type="email" name="email" class="form-control custom-input shadow-none" id="email" placeholder="name@example.com" />
            <label for="email">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" name="password" class="form-control custom-input shadow-none" id="password" placeholder="your password" />
            <label for="password">Password</label>
            {
              showPassword 
              ? (<span onClick={(e) => setShowPassword(false)}><i className="far fa-eye show-hide-password"></i></span>)
              : (<span onClick={(e) => setShowPassword(true)}><i class="far fa-eye-slash show-hide-password"></i></span>)
            }
          </div>
          <div class="form-floating">
            <input type="password" name="confirm-password" class="form-control custom-input shadow-none" id="confirm-password" placeholder="retype your password" />
            <label for="confirm-password">Confirm Password</label>
            {
              showPassword 
              ? (<span onClick={(e) => setShowPassword(false)}><i className="far fa-eye show-hide-password"></i></span>)
              : (<span onClick={(e) => setShowPassword(true)}><i class="far fa-eye-slash show-hide-password"></i></span>)
            }
          </div>
          <button type="submit" class="btn my-5 button-register">REGISTER</button>
        </form>

        <small id="regis" className="form-text text-muted">Sudah punya akun ?</small><a href="login" className="regis-register"> Login </a><br></br>
      </div>


    </div>

  );
}

export default Register;
