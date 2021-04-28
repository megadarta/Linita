import '../css/BannerBeraksi.css';

function BannerBeraksi() {
  return (
        <div className="custom-beraksi d-flex flex-column align-items-center">
                <div className="judul-beraksi mt-5 text-center">APA YANG HARUS DILAKUKAN?</div>
                <div className="text-beraksi">Banyak sekali kasus kekerasan seksual yang ditemukna di Inodneisa, Jika anda mengalami atau pernah menjadi korban kekerasan seksual, jangan hanya diam ayo segera lakukan langkah terbaikmu. Cintai dirimu sendiri dan bantu orang lain untuk lebih waspada lagi.</div>
                <div><a href="/actions"><button className="button-beraksi btn-outline-secondary">Mulai Beraksi</button></a></div>
        </div>
  );
}

export default BannerBeraksi;