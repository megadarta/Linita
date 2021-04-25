import '../css/ListArtikel.css';
import KartuArtikel from './KartuArtikel.js';

function ListArtikel() {
    return (
        <div className="custom-listartikel d-flex flex-column align-items-center">
            <h5><b>ARTIKEL LAINNYA</b></h5>
            <div className="custom-card-artikel flex-column">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <KartuArtikel />
                        <KartuArtikel />
                        <KartuArtikel />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListArtikel;
