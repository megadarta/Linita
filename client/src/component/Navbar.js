import '../css/Navbar.css';

function Navbar() {
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
                        <li className="nav-item">
                            <a href="/login"><button type="button" className="btn btn-outline-secondary btn-login">LOGIN</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
