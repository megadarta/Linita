import '../css/Navbar.css';

function Navbar() {
    return (
        <nav class="customnav navbar navbar-expand-lg navbar-light">
            <div class="container-fluid navtext">
                {/* <div> */}
                    <a class="navbar-brand" href="#">Linita</a>
                {/* </div>
                <div> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Stories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Action</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </div>
        </nav>

    );
}

export default Navbar;
