import React, { useEffect, useRef, useState } from 'react';
import '../css/Lapor.css';

function Lapor() {
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
      className={ isIntersect ? "body-lapor img-lapor d-flex align-items-center justify-content-end animate__animated animate__fadeIn" : "body-lapor" }
      ref={elementRef}
    >
      <div className="custom-lapor">
          <div className="konten-lapor">
              {/* title */}
              <div className={ isIntersect ? "animate__animated animate__fadeIn animate__slow animate__delay-1s" : "" }>
                <h1 className="judul-konten">
                  Darurat pelecehan seksual, <br />laporkan sekarang juga!
                </h1>
              </div>

              {/* description */}
              <div className={ isIntersect ? "animate__animated animate__fadeIn animate__slow animate__delay-2s" : "" }>
                <p className="lapor-desc">Bantulah kami mengeliminasi segala bentuk kekerasan terhadap perempuan dan anak perempuan pada ruang publik dan privat, termasuk perdagangan seksual dan bentuk eksploitasi lainnya. Pelecehan seksual bukanlah hal yang biasa dan bisa dibiarkan. Kami bersatu mendukung anda, Jangan takut dan segera laporkan! melindungi negeri berasal dari diri sendiri.</p>
                <a href="https://www.lapor.go.id/" target="_blank">
                  <button type="button" className="btn btn-color button-lapor shadow-none">
                    LAPORKAN
                  </button>
                </a>
              </div>
          </div>
      </div>
    </div>
   
  );
}

export default Lapor;
