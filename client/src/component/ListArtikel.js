import '../css/ListArtikel.css';
import KartuArtikel3 from './KartuArtikel3.js';
import KartuArtikel2 from './KartuArtikel2.js';
import KartuArtikel1 from './KartuArtikel1.js';

function ListArtikel() {
    return (
        <div className="custom-listartikel">
            <div className="custom-card-artikel flex-column">
                <div className="container">
                    <div className="row justify-content-evenly">
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
