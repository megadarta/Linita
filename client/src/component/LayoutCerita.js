import '../css/Cardcerita.css';
import KartuCerita from './KartuCerita.js';
import BannerCerita from './BannerCerita.js';
import { useEffect, useState } from 'react';
import { server } from '../server.js';
import PreLoader from './PreLoader';

function LayoutCerita(props) {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(server + 'story/')
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setStories(data);
        })
    }, [setStories, setLoading]);

    return (
        <div>
            <BannerCerita autentikasi={props.autentikasi} loading={props.loading} />
            {
                loading 
                ?
                    <PreLoader />
                :
                <div className="custom-card-cerita flex-column">
                    <div className="container-fluid">
                        <div className="row justify-content-evenly">
                            { stories.map((story, index) => {
                                return (
                                    <KartuCerita key={index} story={story} />
                                )
                            })}   
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default LayoutCerita;
