import '../css/Home.css';
import Testimoni from './Testimoni';

function Home() {
    return (
        <div id="top">
        <div class="container-fluid konten-atas">
            <div class="konten-kiri">
                <div class="background"/>
                <img class="image2" src="asset/slide01.png" />
            </div>
        </div>
        <Testimoni />
        </div>


    );
}

export default Home;
