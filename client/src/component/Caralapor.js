import '../css/Caralapor.css';

function Caralapor() {
    return (
        <div className="custom-cara-lapor flex-column">
            <div className="text-center mb-5">
                <h3>Cara Melapor Kejahatan Seksual</h3>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div class="card card-lapor">
                        <img class="card-img-top img-card-lapor" loading="lazy" src="./asset/touch.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5>Klik Tombol “Laporkan” Diatas</h5>
                            <p class="card-text text-card-lapor">Anda akan diarahkan ke formulir pengaduan lapor.go.id</p>
                        </div>
                    </div>
                    <div class="card card-lapor">
                        <img class="card-img-top img-card-lapor" loading="lazy" src="./asset/contact-form.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5>Isikan data laporan pada formulir</h5>
                            <p class="card-text text-card-lapor">Pilihlah tipe “Pengaduan” lalu isikan data secara lengkap dan nyata</p>
                        </div>
                    </div>
                    <div class="card card-lapor">
                        <img class="card-img-top img-card-lapor" loading="lazy" src="./asset/to-do-list.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5>Pilih kategori laporan yang sesuai</h5>
                            <p class="card-text text-card-lapor">Pada kotak form “Pilih Kategori Laporan Anda”, tekan tombol + pada “Kesetaraan Gender dan Sosial Inklusif” lalu pilih “Pelecehan Seksual”</p>
                        </div>
                    </div>
                    <div class="card card-lapor">
                        <img class="card-img-top img-card-lapor" loading="lazy" src="./asset/process.png" alt="Card image cap"></img>
                        <div class="card-body">
                            <h5>Laporanmu akan segera diproses</h5>
                            <p class="card-text text-card-lapor">Tunggu hingga kasus yang dilaporkan diverifikasi  dan ditindak lanjuti oleh pihak yang berwenang</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Caralapor;
