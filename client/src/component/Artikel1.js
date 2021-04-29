import { useEffect, useState } from 'react';
import { server } from '../server.js';
import '../css/Artikel.css';
import { useParams } from 'react-router';
import PreLoader from './PreLoader';

function Artikel1() {
    const { articleID } = useParams();
    const [artikel, setArtikel] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(server + 'article/view/' + articleID)
        .then(res => res.json())
        .then(data => { 
            setArtikel(data);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return (
            <div className="cerita-load">
                <PreLoader />
            </div>
        );
    }

    return (
        <div className="custom-artikel d-flex  flex-column ">
            <div className="judul-artikel mb-4 mt-4">{ artikel?.title }</div>
            <div>
                <img className="gambar-artikel mt-2" src={ server  + 'public/' + artikel?.image.path }></img>
                <p className="mt-2 sumber-gambar">{ artikel?.image.alt }</p>
            </div>
            <div style={{ whiteSpace: 'pre-wrap' }}>
                { artikel?.content }
                <p className="referensi-artikel"><b>Reference</b></p>
                <a href={ `${artikel?.reference}` } className="sumber-artikel" target="_blank">{ artikel?.reference }</a>
            </div>
        </div>
    );
}

export default Artikel1;
