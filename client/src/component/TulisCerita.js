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
            <div className="d-flex justify-content-end justify-content-between btn-tulis-cerita mt-2">
                <button type="button" class="btn btn-kembali shadow-none">Kembali</button>
                <button type="button" className="btn btn-kirim shadow-none">Kirim</button>
            </div>
        </div>
    );
}

export default TulisCerita;