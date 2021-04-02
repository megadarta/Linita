import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="customnav navbar navbar-expand-lg navbar-light">
            <div className="container-fluid navtext">
                    <a className="navbar-brand">Linita</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Action</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Login</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>

    );
}

export default Navbar;
