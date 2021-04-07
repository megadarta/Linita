import '../css/Lapor.css';

function Lapor() {
  return (
    <div className="body-lapor d-flex align-items-center justify-content-end">
    <div className="custom-lapor">
        <div className="konten-lapor">
            {/* title */}
            <h1 className="judul-konten">
              Darurat pelecehan seksual, laporkan sekarang juga!
            </h1>

            {/* description */}
            <p className="lapor-desc">Bantulah kami mengeliminasi segala bentuk kekerasan terhadap perempuan dan anak perempuan pada ruang publik dan privat, termasuk perdagangan seksual dan bentuk eksploitasi lainnya. Pelecehan seksual bukanlah hal yang biasa dan bisa dibiarkan. Kami bersatu mendukung anda, Jangan takut dan segera laporkan! melindungi negeri berasal dari diri sendiri.</p>
            <button type="button" class="btn btn-color button-lapor">LAPORKAN</button>
        </div>
    </div>
    </div>
   
  );
}

export default Lapor;
