import '../css/PopupForm.css';

function PopupForm() {
    return (
	<div class="section full-height">
        <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
            <label for="modal-btn">TULIS CERITA<i class="uil uil-expand-arrows"></i></label>
                <div class="modal">		
                    <div class="modal-wrap">
                        <h3 class="judul">ATURAN DAN KETENTUAN CERITA</h3>
                        <div class="title">I. Ketentuan Umum Bagi Pengguna :</div>
                        <p>1. Pengguna dengan ini menyatakan bahwa pengguna adalah subjek hukum yang cakap dan mampu untuk mengikatkan diri dalam perjanjian.
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
                            <br></br>
                        </p>
                        <div class="title">II. Tanggung Jawab Kami :</div>
                          <p>
                            1. Kewajiban kami hanyalah sebatas penyediaan platform linita.
                            <br></br>
                            2. Bentuk kerugian yang dikarenakan tindakan dari pengguna yang melanggar ketentuan ini menjadi tanggung jawab pengguna.
                            <br></br>
                            3. Tidak akan menyebarkan identitas pribadi pengguna kepada siapapun tanpa persetujuan.
                            <br></br>
                          </p>
                        <div>
                            <div class="form-group">
                                <label for="exampleInputName">NAMA LENGKAP*</label><br></br>
                                <input type="name" class="form-control" id="InputName" placeholder="Nama lengkap sesuai KK / KTP"></input>
                                </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">NIK*</label><br></br>
                                <input type="email" class="form-control" id="InputNIK" placeholder="NIK sesuai KK / KTP"></input>
                                </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">IZINKAN ORANG LAIN MENGETAHUI NAMA ANDA*</label><br></br>
                                <input type="radio" class="form-pilihan" name="option" value="yes"></input>		  
                                <a for="showname">Ya, Izinkan.</a><br></br>        	
                                <input type="radio" class="form-pilihan" name="option" value="no"></input>		  
                                <a for="anonymous">Tidak diizinkan, samarkan nama saya.</a><br></br>  	
                            </div>
                            <div class="container rules-button">
                            <button type="submit" className="btn-color btn-rules">Submit</button>	
                            </div>
                        </div>
                    </div>	
                </div> 
    </div>
    );
} 

export default PopupForm;