import '../css/Home.css';
import Testimoni from './Testimoni';
import KartuCerita from './KartuCerita';
import BannerBeraksi from './BannerBeraksi';
import KartuArtikel3 from './KartuArtikel3';
import KartuArtikel2 from './KartuArtikel2';
import KartuArtikel1 from './KartuArtikel1';
import { useEffect, useState } from 'react';
import { server } from '../server.js';

function Home() {
    const [topStories, setTopStories] = useState([]);

    useEffect(() => {
        fetch(server + 'story/top-three')
        .then(res => res.json())
        .then(data => setTopStories(data));
    }, []);

    return (
        <div id="top" className="mb-5">
        <div className="row container-fluid konten-atas">
            <div className="col-lg-6 contents">
                <div className="konten-kiri d-flex justify-content-lg-end align-items-center">
                    <div className="background animate__animated animate__fadeInLeft animate__delay-2s"></div>
                    <div id="carouselExampleSlidesOnly" className="animate__animated animate__fadeInUp animate__delay-2s carousel custom-carousel slide carousel-fade" data-bs-pause="false" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="asset/slide01.png" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block0 w-100" src="asset/slide03.png" alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="asset/slide02.png" alt="Third slide"/>
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="asset/slide04.png" alt="Fourth slide"/>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            <div className="col-lg-6 contents d-lg-flex justify-content-end align-items-center">
                <div className="main-banner header-text">
                    <div className="konten-home">
                        <div className="animate__animated animate__fadeIn animate__delay-1s">
                            <h2 className="judul-home">Tunjukkan Aksi Peduli Sesama</h2>
                        </div>
                        <div className="animate__animated animate__fadeIn animate__delay-2s">
                            <p className="desc-home">Jangan jadikan pelecehan hal yang biasa, sebagai wanita kita harus menjaga diri dan  saling memberikan semangat kepada orang lain. Mari bersatu memberantas kejahatan seksual.</p>
                            <a className="text text-home" href="/stories">LIHAT CERITA MEREKA 
                            <img className="icon-arrow" width="30px" height="auto" src="asset/right-arrow.svg"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="custom-card-cerita flex-column">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            {
                                topStories.map((story, index) => <KartuCerita story={story} key={index} />)
                            }
                        </div>
                    </div>
            </div>
        <section className="section-action">
            <BannerBeraksi />
        </section>
        <section className="section-artikel d-flex flex-column align-items-center">
            <div className="artikel-home mt-4">ARTIKEL</div>
            <div className="container-fluid">
            <div className="row kartikel-home justify-content-evenly">
                <KartuArtikel3 />
                <KartuArtikel2 />
                <KartuArtikel1 />
            </div>
            </div>
            
        </section>
        <section className="section-testimoni">
            {/* <Testimoni /> */}
        </section>
        </div>


    );
}

export default Home;
