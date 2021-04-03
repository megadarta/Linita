import '../css/Login.css';

function Login() {
  return (
    <div className="custom-login d-flex flex-column flex-lg-row">
      <div className="d-flex justify-content-center">
        <img className="img-login" src="./asset/woman.png"></img>
      </div>
      <div className="px-5 align-self-center justify-content-center mt-4 ml-5">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email/Username</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">Masukkan email atau Username yang sudah terdaftarkan.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
          </div>
          <small id="regis" class="form-text text-muted">Belum punya akun ?</small><a href="register"> Registrasi </a><br></br>
          <button type="submit" class="btn btn-primary mt-4">Submit</button>
         
        </form>
      </div>


    </div>

  );
}

export default Login;
