import '../css/Carakonsultasi.css';

function Carakonsultasi() {
    return (
        <div className="custom-cara-konsultasi flex-column">
            <div className="text-center mb-5">
                <h3>Kelebihan Konsultasi Online</h3>
            </div>

            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div class="card card-konsul">
                        <img class="card-img-top img-card-konsultasi" loading="lazy" src="./asset/location.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text text-card-konsul text-center">Kamu bisa melakukan konseling di mana saja kamu berada.</p>
                        </div>
                    </div>
                    <div class="card card-konsul">
                        <img class="card-img-top img-card-konsultasi" loading="lazy" src="./asset/clock.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text text-card-konsul text-center">Waktu layanan konsultasi yang fleksibel.</p>
                        </div>
                    </div>
                    <div class="card card-konsul">
                        <img class="card-img-top img-card-konsultasi" loading="lazy" src="./asset/verified.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text text-card-konsul text-center">Layanan konsultasi dengan psikolog atau psikiater berkompeten dan berpengalaman.</p>
                        </div>
                    </div>
                    <div class="card card-konsul">
                        <img class="card-img-top img-card-konsultasi" loading="lazy" src="./asset/problem-solving.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text text-card-konsul text-center">Membantu menyelesaikan masalahmu dengan solusi yang solutif.</p>
                        </div>
                    </div>
                    <div class="card card-konsul">
                        <img class="card-img-top img-card-konsultasi" loading="lazy" src="./asset/heartbeat.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <p class="card-text text-card-konsul text-center">DIjamin anda akan jauh merasa lebih baik secara mental.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Carakonsultasi;
