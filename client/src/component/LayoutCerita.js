import '../css/Cardcerita.css';
import KartuCerita from './KartuCerita.js';
import BannerCerita from './BannerCerita.js';
import { useEffect, useState } from 'react';
import { server } from '../server.js';

function LayoutCerita() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch(server + 'story/all')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setStories(data);
        })
    }, [setStories]);

    return (
        <div>
            <BannerCerita />
            <div className="custom-card-cerita flex-column">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        { stories.map((story, index) => {
                            return (
                                <KartuCerita key={index} story={story} />
                            )
                        })}   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutCerita;
