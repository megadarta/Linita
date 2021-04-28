import { useState } from 'react';
import '../css/TulisCerita.css';
import ModalCerita from './ModalCerita.js';
import { server } from '../server.js';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';

function TulisCerita(props) {
    const history = useHistory();
    const [judul, setJudul] = useState();
    const [cerita, setCerita] = useState();
    const [anonim, setAnonim] = useState(true);
    const [submitedStory, setSubmitedStory] = useState(false);

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
            setSubmitedStory(true);
            props.setLoading(false);
        });
    }

    if(submitedStory) {
       return <Redirect to={`/user/${props.autentikasi.user._id}`}></Redirect> 
    }

    return (
        <div className="d-flex flex-column align-items-center mb-5">
        <form onSubmit={tuliscerita}>
            {
                props.autentikasi.user?.fullname === '' &&
                    <ModalCerita setAutentikasi={props.setAutentikasi} setLoading={props.setLoading} />
            }
            <div>
                <input type="text" onChange={e => setJudul(e.target.value)} className="form-control text-judul shadow-none" placeholder="JUDUL..." required></input>
            </div>
            <div>
                <textarea type="text" onChange={e => setCerita(e.target.value)} className="form-control mt-4 text-isi shadow-none" placeholder="Tulis Cerita Anda" required></textarea>
            </div>

            <div className="mt-4 mb-2 garis-buat-cerita">
               
            </div>

            <div className="d-flex justify-content-start flex-column pilihan-anonim"> 
                <div className="div-judul-anonim"><p className="judul-anonim">IZINKAN ORANG LAIN MENGETAHUI NAMA ANDA*</p></div>
                <div className="form-check">
                    <input className="form-check-input radio-anonim" onChange={e => setAnonim(false)} name="exampleRadios"  type="radio" value="option1" checked={anonim==false}></input>
                    <label className="form-check-label check-anonim" htmlFor="exampleRadios1">Ya, izinkan.</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input radio-anonim" onChange={e => setAnonim(true)}  name="exampleRadios"  type="radio" value="option2" checked={anonim==true}></input>
                    <label className="form-check-label check-anonim" htmlFor="exampleRadios1">Tidak diizinkan, samarkan nama saya.</label>
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