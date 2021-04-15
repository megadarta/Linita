import '../css/BannerCerita.css';

function BannerCerita() {
  return (
    <div className="custom-banner-cerita img-banner-cerita d-flex align-items-center justify-content-end">
      <div className="konten-banner-cerita">
        {/* title */}
        <h1 className="judul-banner-cerita judul-konten">
          KISAHMU BUKANLAH SUATU PENYESALAN
        </h1>

        {/* description */}
        <p className="banner-cerita-desc">Kisah kejahatan seksual yang pernah anda alami akan menjadi edukasi kepada pembaca agar selalu waspada terhadap berbagai macam tindakan pelecehan. Disinilah, anda dapat bercerita tanpa mempublikasikan identitas anda.</p>
        <a href="https://api.whatsapp.com/send?phone=+6285546697238" target="_blank">
          <button type="button" className="btn btn-color button-cerita shadow-none">SAYA INGIN BERCERITA</button>
        </a>
      </div>
    </div>
  );
}

export default BannerCerita;