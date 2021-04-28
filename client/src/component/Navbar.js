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
            props.setAutentikasi(data);
            history.push("/login"); 
            props.setLoading(false);
        });
    }
    return (
        <nav className="customnav navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid navtext">
                <a href="/"><img href="/" src="/asset/Logo Linita.png" width="120vw" className="navbar-brand"></img></a>
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
                            <a className="nav-link" href="/actions">Mulai Beraksi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-lg-4" href="/articles">Artikel</a>
                        </li>
                        
                            {   props.loading
                                ?
                                    <button type="button" className="btn btn-outline-secondary btn-login button--loading nav-link"><div className="p-0 m-0" style={{ visibility: 'hidden' }}>Login</div></button>
                                : 
                                    props.autentikasi.auth == true 
                                    ? 
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle btn btn-outline-secondary btn-login" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Profile
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <a className="dropdown-item" href={`/user/${props.autentikasi.user?._id}`}>{ props.autentikasi.user?.username }</a>
                                            </li>
                                            <li>  
                                                <a onClick={buttonlogout}><button type="button" className="dropdown-item">Logout</button></a>
                                            </li>
                                        </ul>
                                    </li>
                                    :
                                    <li className="nav-item"> 
                                        <a href="/login"><button type="button" className="btn btn-outline-secondary btn-login nav-link">LOGIN</button></a>
                                    </li>
                            }
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
