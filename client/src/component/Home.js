import '../css/Home.css';
import Testimoni from './Testimoni';
import KartuCerita from './KartuCerita';

function Home() {
    return (
        <div id="top">
<<<<<<< HEAD
        <div class="row container-fluid konten-atas">
            <div class="col">
                <div class="konten-kiri">
                    <div class="background"></div>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="asset/slide01.png" alt="First slide"/>
=======
        <div className="row container-fluid konten-atas">
            <div className="col-lg-6 contents">
                <div className="konten-kiri d-flex justify-content-lg-end align-items-center">
                    <div className="background animate__animated animate__fadeInLeft animate__delay-2s"></div>
                    <div id="carouselExampleSlidesOnly" className="animate__animated animate__fadeInUp animate__delay-2s carousel custom-carousel slide carousel-fade" data-bs-pause="false" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="asset/slide01.png" alt="First slide"/>
>>>>>>> e6d1f53e6581f7d6273d2525f0244211a6debc73
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
            <div className="col-lg-6 contents">
                <div className="main-banner header-text">
                    <div className="konten-home">
                        <div className="animate__animated animate__fadeIn animate__delay-1s">
                            <h2 className="judul-home">LOREM IPSUM</h2>
                        </div>
                        <div className="animate__animated animate__fadeIn animate__delay-2s">
                            <p className="desc-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo dui, ornare in diam a, lobortis sollicitudin nulla. Vestibulum gravida fermentum magna, nec rutrum elit ullamcorper quis. Vivamus in nisl in ipsum dictum varius. Aliquam vel velit nunc.</p>
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
                            <KartuCerita />

                            <KartuCerita />
                            
                            <KartuCerita />
                            
                        </div>
                    </div>
            </div>
        <section className="section-action">

        </section>
        <section className="section-artikel">

        </section>
        <section className="section-testimoni">
            <Testimoni />
        </section>
        </div>


    );
}

export default Home;
