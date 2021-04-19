import '../css/Navbar.css';
import {server} from '../server.js';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";

function Navbar(props) {
    const history = useHistory();

    useEffect(() => { }, [props.autentikasi]);

    function buttonlogout(e){
        e.preventDefault();
        props.setLoading(true);

        fetch(server + 'logout', {
            method: 'DELETE',
            credentials: "include"
        })
        .then(data => { 
            props.setAutentikasi(data.auth);
            history.push("/login"); 
            props.setLoading(false);
        });
    }
    return (
        <nav className="customnav navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid navtext">
                <img src="asset/Logo Linita.png" width="120vw" class="navbar-brand"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/stories">Cerita</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/action">Mulai Beraksi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-lg-5" href="/article">Artikel</a>
                        </li>
                        <li class="nav-item">
                            {   props.loading
                                    ?
                                    <button type="button" class="btn btn-outline-secondary btn-login button--loading"><div className="p-0 m-0" style={{ visibility: 'hidden' }}>LOGIN</div></button>
                                    : 
                                    props.autentikasi == true 
                                    ? 
                                    <a onClick={buttonlogout}><button type="button" class="btn btn-outline-secondary btn-login">LOGOUT</button></a>
                                    : 
                                    <a href="/login"><button type="button" class="btn btn-outline-secondary btn-login">LOGIN</button></a>
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
