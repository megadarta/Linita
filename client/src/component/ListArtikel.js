import '../css/ListArtikel.css';
import KartuArtikel3 from './KartuArtikel3.js';
import KartuArtikel2 from './KartuArtikel2.js';
import KartuArtikel1 from './KartuArtikel1.js';
import PreLoader from './PreLoader.js';
import { useEffect, useState } from 'react';
import { server } from '../server.js';

function ListArtikel() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(server + 'article/')
        .then(res => res.json())
        .then(data => { 
            setArticles(data.articles);
            setLoading(false); 
        });
    }, []);

    if(loading) {
        return (
            <div className="cerita-load">
                <PreLoader />
            </div>
        );
    }

    return (
        <div className="custom-listartikel cerita-load">
            <div className="custom-card-artikel flex-column">
                <div className="container">
                    <div className="row justify-content-evenly">
                        { articles.map((article, index) => <KartuArtikel1 article={article} />) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListArtikel;
