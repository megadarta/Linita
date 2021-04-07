import '../css/Carakonsultasi.css';

function Carakonsultasi() {
    return (
        <div className="custom-cara-lapor flex-column">
            <div className="text-center">
                <h3>Kelebihan Konsultasi Online</h3>
            </div>
    
            <div className="container">
            <div className="row justify-content-center">
            <div class="card card-konsul" style={{width: "18rem"}}>
                <img class="card-img-top p-5" src="./asset/location.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <p class="card-text text-card-konsul">Kamu bisa melakukan konseling di mana saja kamu berada.</p>
                    </div>
            </div>
            <div class="card card-konsul" style={{width: "18rem"}}>
                <img class="card-img-top p-5" src="./asset/clock.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <p class="card-text text-card-konsul">Waktu layanan konsultasi yang fleksibel.</p>
                    </div>
            </div>
            <div class="card card-konsul" style={{width: "18rem"}}>
                <img class="card-img-top p-5" src="./asset/verified.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <p class="card-text text-card-konsul">Layanan konsultasi dengan psikolog atau psikiater berkompeten dan berpengalaman.</p>
                    </div>
            </div>
            <div class="card card-konsul" style={{width: "18rem"}}>
                <img class="card-img-top p-5" src="./asset/problem-solving.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <p class="card-text text-card-konsul">Membantu menyelesaikan masalahmu dengan solusi yang solutif.</p>
                    </div>
            </div>
            <div class="card card-konsul" style={{width: "18rem"}}>
                <img class="card-img-top p-5" src="./asset/heartbeat.png" alt="Card image cap"></img>
                    <div class="card-body">
                        <p class="card-text text-card-konsul">DIjamin anda akan jauh merasa lebih baik secara mental.</p>
                    </div>
            </div>
            </div>
            </div>
            </div>

  );            
}

export default Carakonsultasi;
