import '../css/Register.css';
import { useState } from 'react';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmationPass, setShowconfirmationPass] = useState(false);
  
  return (
    <div className="custom-register d-flex justify-content-center">
      <div className="align-self-center ">
        <h3 className="text-center">Buat Akun</h3>
        <div className="classlogo text-center">
          <img src="../logo192.png" className="rounded-left logo-register "></img>
        </div>
        <form method="post" action="" className="register-form mb-3">
        <div className="form-floating mb-3">
            <input type="email" name="email" className="form-control custom-input shadow-none" id="email" placeholder="name@example.com" />
            <label for="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type={showPassword ? "text" : "password"} name="password" className="form-control custom-input shadow-none" id="password" placeholder="your password" />
            <label for="password">Password</label>
            {
              showPassword
                ? <div className="show-hide-password" onClick={(e) => { setShowPassword(false) }}><i className="far fa-eye"></i></div>
                : <span className="show-hide-password" onClick={(e) => { setShowPassword(true) }}><i className="far fa-eye-slash"></i></span>
            }
          </div>
          <div className="form-floating">
            <input type={showconfirmationPass ? "text" : "password"} name="confirm-password" className="form-control custom-input shadow-none" id="confirm-password" placeholder="retype your password" />
            <label for="confirm-password">Confirm Password</label>
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
