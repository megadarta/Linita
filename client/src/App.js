import './App.css';
import Navbar from './component/Navbar.js';
import Lapor from './component/Lapor.js';
import Caralapor from './component/Caralapor.js';
import Footer from './component/Footer.js';
import Carakonsultasi from './component/Carakonsultasi.js';
import Psikolog from './component/Psikolog.js';
import Login from './component/Login.js';
import Home from './component/Home.js';
import Register from './component/Register.js';
import Story from './component/Cerita';

import LayoutCerita from './component/LayoutCerita.js';
import PreLoader from './component/PreLoader.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { server } from './server.js';
import 'animate.css';
import '@fortawesome/fontawesome-free/js/all.js';
import TulisCerita from './component/TulisCerita.js';
import Artikel from './component/Artikel.js';
import ListArtikel from './component/ListArtikel.js';

function App() {
  const [autentikasi, setAutentikasi] = useState({ auth: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch(server, {
      credentials: 'include',
      method: 'GET'
    })
      .then(isi => isi.json())
      .then(
        data => {
          if (isMounted) {
            setAutentikasi(data);
            setLoading(false);
          }
        }
      )

    return () => { isMounted = false }
  }, [setAutentikasi, setLoading]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} />
          <Home />
          <Footer />
        </Route>
        <Route path="/action">
          <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} />
          <Lapor />
          <Caralapor />
          <Psikolog />
          <Carakonsultasi />
          <Footer />
        </Route>
        <Route path="/login">
          <Login autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading}/>
        </Route>
        <Route path="/stories">
          <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} />
          <LayoutCerita loading={loading} />
          <Footer />
        </Route>
        <Route path="/register">
          <Register setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading}/>
        </Route>
        <Route path="/story/view/:id">
          <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} />
          <Story autentikasi={autentikasi} setAutentikasi={setAutentikasi} />
        </Route>
        <Route path="/story/add">
          <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} />
          <TulisCerita autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} />
          <Footer />
        </Route>
        <Route path="/article">
          <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} />

          <Artikel />
          <ListArtikel />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
