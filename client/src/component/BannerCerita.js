import '../css/BannerCerita.css';

function BannerCerita(props) {
  return (
    <div className="custom-banner-cerita img-banner-cerita d-flex align-items-center justify-content-end animate__animated animate__fadeIn">
      <div className="konten-banner-cerita">
        {/* title */}
        <div className="animate__animated animate__fadeIn animate__slow animate__delay-1s">
          <h1 className="judul-banner-cerita judul-konten ">
            KISAHMU BUKANLAH SUATU PENYESALAN
          </h1>
        </div>

        {/* description */}
        <div className="animate__animated animate__fadeIn animate__slow animate__delay-2s">
          <p className="banner-cerita-desc">Kisah kejahatan seksual yang pernah anda alami akan menjadi edukasi kepada pembaca agar selalu waspada terhadap berbagai macam tindakan pelecehan. Disinilah, anda dapat bercerita tanpa mempublikasikan identitas anda.</p>
          <a href={ props.loading ? "" : "/story/add" }>
            <button type="button" className={"btn btn-color button-psikolog shadow-none " + (props.loading && "button--loading")}><span style={{visibility: props.loading ? 'hidden' : undefined}}>SAYA INGIN BERCERITA</span></button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BannerCerita;