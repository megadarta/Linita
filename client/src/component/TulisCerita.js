import '../css/TulisCerita.css';

function TulisCerita() {
    return (
        <div className="d-flex flex-column align-items-center">
            <div>
                <input type="text" class="form-control text-judul shadow-none" placeholder="JUDUL..."></input>
            </div>
            <div>
                <textarea type="text" class="form-control mt-4 text-isi shadow-none" placeholder="Tulis Cerita Anda"></textarea>
            </div>

            <div className="garis-buat-cerita">
                <hr className="baris-batas"/>
            </div>

            <div className="d-flex justify-content-start flex-column pilihan-anonim"> 
                <div className="div-judul-anonim"><p className="judul-anonim">IZINKAN ORANG LAIN MENGETAHUI NAMA ANDA*</p></div>
                <div class="form-check">
                    <input class="form-check-input radio-anonim" name="exampleRadios"  type="radio" value="option1"></input>
                    <label class="form-check-label check-anonim" for="exampleRadios1">Ya, izinkan.</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input radio-anonim" name="exampleRadios"  type="radio" value="option2"></input>
                    <label class="form-check-label check-anonim" for="exampleRadios1">Tidak diizinkan, samarkan nama saya.</label>
                </div>
            </div>

           
            <div className="d-flex justify-content-center btn-tulis-cerita mt-3">
                <button type="button" className="btn btn-kirim shadow-none">Kirim</button>
            </div>
        </div>
    );
}

export default TulisCerita;