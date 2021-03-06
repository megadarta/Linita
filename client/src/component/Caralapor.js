import '../css/Caralapor.css';
import React, { useEffect, useRef, useState } from 'react';

function Caralapor() {
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
            className= "custom-cara-lapor"
            ref={elementRef}
        >
            <div className="text-center mb-5">
                <h3>Cara Melapor Kejahatan Seksual</h3>
            </div>
            <div className={ isIntersect ? "animate__animated animate__fadeInRight animate__delay-2s" : undefined }>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card card-lapor">
                            <img className="card-img-top img-card-lapor" loading="lazy" src="./asset/touch.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5>Klik Tombol “Laporkan” Diatas</h5>
                                <p className="card-text text-card-lapor">Anda akan diarahkan ke formulir pengaduan lapor.go.id</p>
                            </div>
                        </div>
                        <div className="card card-lapor">
                            <img className="card-img-top img-card-lapor" loading="lazy" src="./asset/contact-form.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5>Isikan data laporan pada formulir</h5>
                                <p className="card-text text-card-lapor">Pilihlah tipe “Pengaduan” lalu isikan data secara lengkap dan nyata</p>
                            </div>
                        </div>
                        <div className="card card-lapor">
                            <img className="card-img-top img-card-lapor" loading="lazy" src="./asset/to-do-list.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5>Pilih kategori laporan yang sesuai</h5>
                                <p className="card-text text-card-lapor">Pada kotak form “Pilih Kategori Laporan Anda”, tekan tombol + pada “Kesetaraan Gender dan Sosial Inklusif” lalu pilih “Pelecehan Seksual”</p>
                            </div>
                        </div>
                        <div className="card card-lapor">
                            <img className="card-img-top img-card-lapor" loading="lazy" src="./asset/process.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <h5>Laporanmu akan segera diproses</h5>
                                <p className="card-text text-card-lapor">Tunggu hingga kasus yang dilaporkan diverifikasi  dan ditindak lanjuti oleh pihak yang berwenang</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Caralapor;
