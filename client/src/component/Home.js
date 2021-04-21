import '../css/Home.css';
import Testimoni from './Testimoni';
import KartuCerita from './KartuCerita';

function Home() {
    return (
        <div id="top">
        <div class="row container-fluid konten-atas">
            <div class="col">
                <div class="konten-kiri">
                    <div class="background"></div>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="asset/slide01.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block0 w-100" src="asset/slide03.png" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="asset/slide02.png" alt="Third slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="asset/slide04.png" alt="Fourth slide"/>
                            </div>
                        </div>
                        </div>
            </div>
            </div>
            <div class="col">
                <div class="main-banner header-text">
                    <div class="konten-home">
                        <h2 class="judul-home">LOREM IPSUM</h2>
                        <p class="desc-home">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo dui, ornare in diam a, lobortis sollicitudin nulla. Vestibulum gravida fermentum magna, nec rutrum elit ullamcorper quis. Vivamus in nisl in ipsum dictum varius. Aliquam vel velit nunc.</p>
                        <a class="text text-home" href="/stories">LIHAT CERITA MEREKA 
                        <img class="icon-arrow" width="30px" height="auto" src="asset/right-arrow.svg"/></a>
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

                            <KartuCerita />
                            
                        </div>
                    </div>
            </div>
        <section class="section-action">

        </section>
        <section class="section-artikel">

        </section>
        <section class="section-testimoni">
        <Testimoni />
        </section>
        </div>


    );
}

export default Home;
