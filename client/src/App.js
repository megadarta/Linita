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
import Testing from './component/Testing';
import ListStory from './component/ListStory.js';
import LayoutCerita from './component/LayoutCerita.js';
import PreLoader from './component/PreLoader.js';
import PopupForm from './component/PopupForm.js';
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
import Popup from './component/PopupForm';
import Artikel from './component/Artikel.js';
import ListArtikel from './component/ListArtikel.js';

function App() {
  const [autentikasi, setAutentikasi] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(server, {
      credentials: 'include',
      method: 'GET'
    })
    .then(isi => isi.json())
    .then(
      data => {
        console.log(data);
        setAutentikasi(data);
        setLoading(false);
      }
    )
  }, []);

  return (
    <Router>
      <Navbar autentikasi={autentikasi} setAutentikasi={setAutentikasi} setLoading={setLoading} loading={loading} mega="cantik"/>
      { loading 
      ? 
      <PreLoader /> 
      :  
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list-story">
          <ListStory />
        </Route>
        <Route path="/action">
          <Lapor />
          <Caralapor />
          <Psikolog />
          <Carakonsultasi />
          <Footer />
        </Route>
        <Route path="/login">
          <Login setAutentikasi={setAutentikasi} setLoading={setLoading} />
        </Route>
        <Route path="/stories">
          <LayoutCerita />
          <Footer />
        </Route>
        <Route path="/register">
          <Register setAutentikasi={setAutentikasi} setLoading={setLoading} />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
        <Route path="/buat-cerita">
          <TulisCerita />
          <Footer />
        </Route>
        <Route path="/testing2">
          <PopupForm />
        </Route>
        <Route path="/artikel">
          <Artikel />
          <ListArtikel />
          <Footer />
        </Route>
      </Switch>
      }
    </Router>
  );
}

export default App;
