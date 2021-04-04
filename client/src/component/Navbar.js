import '../css/Navbar.css';

function Navbar() {
    return (
        <nav class="customnav navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid navtext">
                <a class="navbar-brand" href="#">Linita</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Stories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">What you can do?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-secondary btn-login">LOGIN</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
