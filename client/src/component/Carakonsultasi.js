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
                <h3>Kelebihan Konsultasi Online</h3>
            </div>

            <div className={ isIntersect && "animate__animated animate__fadeInUp animate__delay-2s" }>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/location.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">Kamu bisa melakukan konseling di mana saja kamu berada.</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/clock.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">Waktu layanan konsultasi yang fleksibel.</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/verified.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">Layanan konsultasi dengan psikolog atau psikiater berkompeten dan berpengalaman.</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/problem-solving.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">Membantu menyelesaikan masalahmu dengan solusi yang solutif.</p>
                            </div>
                        </div>
                        <div className="card card-konsul">
                            <img className="card-img-top img-card-konsultasi" loading="lazy" src="./asset/heartbeat.png" alt="Card image cap"></img>
                            <div className="card-body">
                                <p className="card-text text-card-konsul text-center">DIjamin anda akan jauh merasa lebih baik secara mental.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Carakonsultasi;
