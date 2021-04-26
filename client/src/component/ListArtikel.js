import '../css/ListArtikel.css';
import KartuArtikel3 from './KartuArtikel3.js';
import KartuArtikel2 from './KartuArtikel2.js';
import KartuArtikel1 from './KartuArtikel1.js';

function ListArtikel() {
    return (
        <div className="custom-listartikel d-flex flex-column align-items-center">
            <h1><b>BACA ARTIKEL</b></h1>
            <div className="custom-card-artikel flex-column">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <KartuArtikel3 />
                        <KartuArtikel2 />
                        <KartuArtikel1 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListArtikel;
