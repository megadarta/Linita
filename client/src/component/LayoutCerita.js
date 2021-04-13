import '../css/Cardcerita.css';
import KartuCerita from './KartuCerita.js';
import BannerCerita from './BannerCerita.js';

function LayoutCerita() {
    return (
        <div>
            <BannerCerita />
            <div className="custom-card-cerita flex-column">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <KartuCerita />

                        <KartuCerita />
                        
                        <KartuCerita />

                        <KartuCerita />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutCerita;
