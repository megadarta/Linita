import { useState } from 'react';
import '../css/TulisCerita.css';
import ModalCerita from './ModalCerita.js';
import { server } from '../server.js';

function TulisCerita(props) {
    const [judul, setJudul] = useState();
    const [cerita, setCerita] = useState();
    const [anonim, setAnonim] = useState(true);

    function tuliscerita(e){
        e.preventDefault();

        const body = {
            title: judul,
            content: cerita,
            anonimity: anonim
        };

        props.setLoading(true);

        fetch(server + 'story/create', {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            props.setLoading(false);
        });
    }
    return (
        <div className="d-flex flex-column align-items-center">
        <form onSubmit={tuliscerita}>
            {
                props.autentikasi.user?.fullname === '' &&
                    <ModalCerita setAutentikasi={props.setAutentikasi} setLoading={props.setLoading} />
            }
            <div>
                <input type="text" onChange={e => setJudul(e.target.value)} class="form-control text-judul shadow-none" placeholder="JUDUL..."></input>
            </div>
            <div>
                <textarea type="text" onChange={e => setCerita(e.target.value)} class="form-control mt-4 text-isi shadow-none" placeholder="Tulis Cerita Anda"></textarea>
            </div>

            <div className="garis-buat-cerita">
                <hr className="baris-batas"/>
            </div>
            <div className="mt-4 mb-2 garis-buat-cerita">
               
            </div>

            <div className="d-flex justify-content-start flex-column pilihan-anonim"> 
                <div className="div-judul-anonim"><p className="judul-anonim">IZINKAN ORANG LAIN MENGETAHUI NAMA ANDA*</p></div>
                <div class="form-check">
                    <input class="form-check-input radio-anonim" onChange={e => setAnonim(false)} name="exampleRadios"  type="radio" value="option1" checked={anonim==false}></input>
                    <label class="form-check-label check-anonim" for="exampleRadios1">Ya, izinkan.</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input radio-anonim" onChange={e => setAnonim(true)}  name="exampleRadios"  type="radio" value="option2" checked={anonim==true}></input>
                    <label class="form-check-label check-anonim" for="exampleRadios1">Tidak diizinkan, samarkan nama saya.</label>
                </div>
            </div>

           
            <div className="d-flex justify-content-center btn-tulis-cerita mt-3">
                <button type="submit" className="btn btn-kirim shadow-none">Kirim</button>
            </div>
        </form>
        </div>
    );
}

export default TulisCerita;