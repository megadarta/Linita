import './App.css';
import Navbar from './component/Navbar.js';
import Lapor from './component/Lapor.js';
import Caralapor from './component/Caralapor.js';
import Footer from './component/Footer.js';
import Carakonsultasi from './component/Carakonsultasi.js';
import Psikolog from './component/Psikolog.js';
import Login from './component/Login.js';
import Register from './component/Register.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { server } from './server.js';
import 'animate.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  const [autentikasi, setAutentikasi] = useState();

  useEffect(() => {
    fetch(server, {
      credentials: 'include',
      method: 'GET'
    })
    .then(isi => isi.json())
    .then(
      data => {
        setAutentikasi(data);
      }
    )
  }, [setAutentikasi]);

  return (
    <Router>
      <Switch>
        <Route path="/action">
          <Navbar autentikasi={autentikasi} mega="cantik" />
          <Lapor />
          <Caralapor />
          <Psikolog />
          <Carakonsultasi />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
