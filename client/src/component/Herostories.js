// import '../css/Herostories.css';

function Herostories() {
return (
    <div className="custom-psikolog">
    <div className="konten-psikolog">
      {/* title */}
      <h1 className="judul-konten">
        KONSULTASI GRATIS DAN MUDAH <br />
          DENGAN ORANG YANG BERPENGALAMAN.
        </h1>

      {/* description */}
      <p className="psikolog-desc">Apabila anda cemas, depresi, trauma, histeria atau tekanan psikologis yang mengganggu. Jangan takut ataupun ragu  segera minta bantuan dan pendampingan dengan konsultasi bersama orang yang berpengalaman.</p>
      <a href="https://api.whatsapp.com/send?phone=+6285546697238" target="_blank">
        <button type="button" className="btn btn-color button-psikolog shadow-none">KONSULTASI</button>
      </a>
    </div>
  </div>
);
}

export default Herostories;