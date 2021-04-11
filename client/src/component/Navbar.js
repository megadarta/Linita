import '../css/Navbar.css';
import {server} from '../server.js';
import { useHistory } from 'react-router';

function Navbar(props) {
    const history = useHistory();

    function buttonlogout(e){
        e.preventDefault();
        fetch(server + 'logout', {
            method: 'DELETE',
            credentials: "include"
        }).then(data => history.push("/login"))
    }
    return (
        <nav className="customnav navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid navtext">
                <a className="navbar-brand" href="#">Linita</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Stories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">What you can do?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            {
                                props.autentikasi?.auth == true ? <button type="button" class="btn btn-outline-secondary btn-login"><a href="login" onClick={buttonlogout}>LOGOUT</a></button> : <button type="button" class="btn btn-outline-secondary btn-login"><a href="login">LOGIN</a></button>
                            }

                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
