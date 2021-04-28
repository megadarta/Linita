import { useState } from "react";
import { server } from '../server.js';
import '../css/ModalCerita.css';

const ModalCerita = (props) => {
    const [showModal, setShowModal] = useState(true);
    const [nama, setNama] = useState();
    const [nik, setNik] = useState();
    const [error, setError] = useState(null);
    function submit(e) {
        e.preventDefault();

        if(!nama || !nik) {
            setError('Pastikan anda mengisi semua data diri anda secara lengkap');
            return;
        }

        props.setLoading(true);
        const body = {
            fullname: nama,
            nik
        };

        fetch(server + 'add-detail', {
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            props.setAutentikasi(data);
            setShowModal(false);
            props.setLoading(false);
        });
    }

    return (
        <div style={{ position: 'relative' }}>
            <div className={"modal fade" + (showModal && "show d-block")} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-l">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a href="/stories" className="back d-flex align-items-center"><img src="/asset/back-button.svg" width="15" height="15" className="me-2"></img></a>
                            <h3 className="judul modal-title mx-auto" id="exampleModalLabel">ATURAN DAN KETENTUAN CERITA</h3>
                        </div>
                        <div className="modal-body">
                        <div class="modal-wrap" >
                        <div class="title-ak">I. Ketentuan Umum Bagi Pengguna :</div>
                        <div>
                        <ol className="deskripsi-modal" type="1"><li>Pengguna dengan ini menyatakan bahwa pengguna adalah subjek hukum yang cakap dan mampu untuk mengikatkan diri dalam perjanjian.</li>
                            <li>Setiap pengguna sepakat untuk tidak menyebarluaskan berita atau informasi yang tidak benar (hoaks) di dalam platform Linita.</li>
                            <li>Setiap pengguna sepakat untuk tidak menuliskan  informasi yang bersifat menyesatkan, memfitnah, asusila, mengandung pornografi, bersifat diskriminasi atau rasis.</li>
                            <li>Setiap pengguna sepakat untuk tidak mengambil atau mengumpulkan informasi dari pengguna lain, termasuk alamat email, tanpa sepengetahuan pengguna lain.</li>
                            <li>Setiap pengguna sepakat untuk tidak menuliskan iklan yang tidak sah, materi promosi, spam, surat massal, atau bentuk lainnya.</li>
                            <li>Setiap pengguna sepakat untuk tidak menuliskan identitas pihak ketiga pada fitur cerita, dan disarankan untuk menuliskan pada fitur lapor. </li>
                            <li>Tulisan pengguna tidak melanggar hukum atau peraturan apa pun yang berlaku.</li>
                            <li>Pengguna bertanggung jawab untuk menjaga kerahasiaan dan keamanan atas nama username dan password serta bertanggung jawab sepenuhnya atas segala kegiatan yang dilakukan oleh atau diatasnamakan nama akun Pengguna.</li>
                            <li>Setiap penggunaan yang melanggar ketentuan di atas dapat mengakibatkan, antara lain, penghentian hak Pengguna untuk menggunakan platform Linita serta pelaporan terhadap pihak yang berwenang.</li>
                        </ol>
                        <div className="title-ak">II. Tanggung Jawab Kami :</div>
                          <ol className="deskripsi-modal" type="1">
                            <li>Kewajiban kami hanyalah sebatas penyediaan platform linita.</li>
                            <li>Bentuk kerugian yang dikarenakan tindakan dari pengguna yang melanggar ketentuan ini menjadi tanggung jawab pengguna.</li>
                            <li>Tidak akan menyebarkan identitas pribadi pengguna kepada siapapun tanpa persetujuan.</li>
                          </ol>
                        <div>
                        </div>
                        </div>
                    </div>	
                        </div>
                        <div className="modal-footer flex-column align-items-stretch">
                            <form onSubmit={submit} className="form-custom d-flex flex-column">
                                <div class="form-group">
                                    <label className="judulform form-label" for="InputName" >NAMA LENGKAP*</label><br></br>
                                    <input type="text" onChange={e => setNama(e.target.value)} className="form-control" id="InputName" placeholder="Nama lengkap sesuai KK / KTP" required></input>
                                    </div>
                                <div class="form-group">
                                    <label className="judulform form-label" for="InputNIK" >NIK*</label><br></br>
                                    <input type="text" onChange={e => setNik(e.target.value)} className="form-control" id="InputNIK" placeholder="NIK sesuai KK / KTP" required></input>
                                </div>
                                <small className="error-text align-self-center">*{ error }</small>
                                <input type="submit" className="btn btn-color btn-rules mb-4 mt-5" onClick={submit} value="SUBMIT"></input> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCerita;