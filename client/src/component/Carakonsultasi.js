import React, { useEffect, useRef, useState } from 'react';
import '../css/Carakonsultasi.css';

function Carakonsultasi() {
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
            className="custom-cara-konsultasi flex-column" 
            ref={elementRef}
        >
            <div className="text-center mb-5">
                <h3>Cara Donasi</h3>
            </div>

            <div className={ isIntersect ? "animate__animated animate__fadeInUp animate__delay-2s" : undefined }>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/click.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">1. Klik button "DONASI"</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/tick.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">2. Pilih tujuan donasi </p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/verified.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">3. Isi form data diri dan kelengkapan berkas donasi</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/paper-plane.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">4. Klik button "send"</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/mail.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">5. Informasi lebih lanjut melalui email/nomor hp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Carakonsultasi;
