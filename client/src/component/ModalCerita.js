import { useState } from "react";
// import server from 'server.js';

const ModalCerita = () => {
    const [showModal, setShowModal] = useState(true);
    const [nama, setNama] = useState();
    const [nik, setNik] = useState();

    function submit(e){
        e.preventDefault();

        console.log(nama);
        console.log(nik);
    }
    return (
        <div>
            <div className={"modal fade" + (showModal && "show d-block")} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                        <div class="modal-wrap" >
                        <h3 class="judul">ATURAN DAN KETENTUAN CERITA</h3>
                        <div class="title">I. Ketentuan Umum Bagi Pengguna :</div>
                        <p class="deskripsi">1. Pengguna dengan ini menyatakan bahwa pengguna adalah subjek hukum yang cakap dan mampu untuk mengikatkan diri dalam perjanjian.
                            <br></br>
                            2. Setiap pengguna sepakat untuk tidak menyebarluaskan berita atau informasi yang tidak benar (hoaks) di dalam platform Linita
                            <br></br>
                            3.  Setiap pengguna sepakat untuk tidak menuliskan  informasi yang bersifat menyesatkan, memfitnah, asusila, mengandung pornografi, bersifat diskriminasi atau rasis.
                            <br></br>
                            4. Setiap pengguna sepakat untuk tidak mengambil atau mengumpulkan informasi dari pengguna lain, termasuk alamat email, tanpa sepengetahuan pengguna lain
                            <br></br>
                            5.  Setiap pengguna sepakat untuk tidak menuliskan iklan yang tidak sah, materi promosi, spam, surat massal, atau bentuk lainnya.
                            <br></br>
                            6. Setiap pengguna sepakat untuk tidak menuliskan identitas pihak ketiga pada fitur cerita, dan disarankan untuk menuliskan pada fitur lapor 
                            <br></br>
                            7. Tulisan pengguna tidak melanggar hukum atau peraturan apa pun yang berlaku.
                            <br></br>
                            8. Pengguna bertanggung jawab untuk menjaga kerahasiaan dan keamanan atas nama username dan password serta bertanggung jawab sepenuhnya atas segala kegiatan yang dilakukan oleh atau diatasnamakan nama akun Pengguna.
                            <br></br>
                            <br></br>
                            Setiap penggunaan yang melanggar ketentuan di atas dapat mengakibatkan, antara lain, penghentian hak Pengguna untuk menggunakan paltform Linita serta pelaporan terhadap pihak yang berwenang .  
                            <br></br>
                        </p>
                        <div className="title">II. Tanggung Jawab Kami :</div>
                          <p className="deskripsi">
                            1. Kewajiban kami hanyalah sebatas penyediaan platform linita.
                            <br></br>
                            2. Bentuk kerugian yang dikarenakan tindakan dari pengguna yang melanggar ketentuan ini menjadi tanggung jawab pengguna.
                            <br></br>
                            3. Tidak akan menyebarkan identitas pribadi pengguna kepada siapapun tanpa persetujuan.
                            <br></br>
                          </p>
                        <div>
                        <form onSubmit={submit}>
                            <div class="form-group">
                                <label class="judulform" for="exampleInputName" >NAMA LENGKAP*</label><br></br>
                                <input type="text" onChange={e => setNama(e.target.value)} class="form-control" id="InputName" placeholder="Nama lengkap sesuai KK / KTP"></input>
                                </div>
                            <div class="form-group">
                                <label class="judulform" for="exampleInputEmail1" >NIK*</label><br></br>
                                <input type="text" onChange={e => setNik(e.target.value)} class="form-control" id="InputNIK" placeholder="NIK sesuai KK / KTP"></input>
                            </div>
                           
                            <div class="container rules-button d-flex justify-content-center">
                            <button type="submit" className="btn-color btn-rules" data-bs-dismiss="modal" onClick={e => setShowModal(false)}>SUBMIT</button>
                            </div>
                        </form>
                        </div>
                    </div>	
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={e => setShowModal(false)}>Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCerita;