import React, { useEffect, useRef, useState } from 'react';
import '../css/Psikolog.css';

function Psikolog() {
  const [isIntersect, setIsIntersect] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsIntersect(entry.isIntersecting);
  
      if(entry.isIntersecting) observer.unobserve(entry.target);
    });

    observer.observe(elementRef.current);
  }, [setIsIntersect]);


  return (
    <div
      style={{ visibility: isIntersect === false && 'hidden' }}
      className={ isIntersect ? "body-psikolog img-psikolog d-flex align-items-center animate__animated animate__fadeIn" : "body-psikolog" }
      ref={elementRef}
    >
      <div className="custom-psikolog">
        <div className="konten-psikolog">
          {/* title */}
          <div className={ isIntersect ? "animate__animated animate__fadeIn animate__slow animate__delay-1s" : undefined }>
            <h1 className="judul-konten">
              KONSULTASI GRATIS DAN MUDAH <br />
              DENGAN ORANG YANG BERPENGALAMAN.
            </h1>
          </div>

          {/* description */}
          <div className={ isIntersect ? "animate__animated animate__fadeIn animate__slow animate__delay-2s" : undefined }>
            <p className="psikolog-desc">Apabila anda cemas, depresi, trauma, histeria atau tekanan psikologis yang mengganggu. Jangan takut ataupun ragu  segera minta bantuan dan pendampingan dengan konsultasi bersama orang yang berpengalaman.</p>
            <a href="https://api.whatsapp.com/send?phone=+6285546697238" target="_blank">
              <button type="button" className="btn btn-color button-psikolog shadow-none">KONSULTASI</button>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Psikolog;
