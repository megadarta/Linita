import '../css/Register.css';

function Register() {
  return (
    <div className="custom-register d-flex justify-content-center">
      <div className="align-self-center ">
        <h3 className="text-center">Create An Account</h3>
        <div className="classlogo text-center">
          <img src="../logo192.png" class="rounded-left logo-register "></img>
        </div>
        <form method="post" action="" class="register-form mb-3">
          <div class="input-container">
            <input type="email" class="input" name="email" placeholder="Email" />
          </div>
          <div class="input-container">
            <input type="password" id="register-password" class="input" name="password" placeholder="Password" />
            <i id="show-password" class="fa fa-eye"></i>
          </div>
          <div class="input-container">
            <input type="password" id="register-password" class="input" name="password" placeholder="Current Password" />
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
