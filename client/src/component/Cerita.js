import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { server } from '../server.js';
import PreLoader from './PreLoader';
import '../css/Cerita.css';

const Story = (props) => {
    const [story, setStory] = useState({});
    const [comments, setComments] = useState([]);
    const [comentInput, setCommentInput] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(server + 'story/one/' + id)
        .then(res => res.json())
        .then(data => {
            setStory(data);
            setLoading(false);
        });

        fetch(server + 'comment/' + id)
        .then(res => res.json())
        .then(data => {
            setComments(data);
            setLoading(false);
        });
    }, [setStory, setLoading]);

    const submitComment = (e) => {
        e.preventDefault();
        const body = {
            content: comentInput,
            storyID: id
        }

        fetch(server + 'comment/add', {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            fetch(server + 'comment/' + id)
            .then(res => res.json())
            .then(data => {
                setComments(data);
            });
        });
    }

    if(loading) {
        return (
            <PreLoader />
        )
    }
    return (
        <div className="container-fluid custom-cerita p-0">
            <div className="artikel-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="m-0">Cerita oleh { story.author?.fullname }</h6>
                        <small>Dibuat pada <span className="tanggal-cerita">{ story.created_at }</span></small>
                    </div>
                    <img src="/asset/share1.svg"></img>
                </div>
                <h1 className="title-cerita  mt-3 mb-5">{ story.title }</h1>
                <article className="body-cerita">
                    { story.content }
                </article>
                <div className="d-flex justify-content-between align-items-center my-5">
                    <button className="btn shadow-none p-0 m-0">
                        <div className="d-flex align-items-center like-button py-1 px-3">
                            <img src="/asset/unlike1.svg"></img>
                            <b className="px-5">LIKE</b>
                            <small><b className="jumlah-like p-1">{ story.likes }</b></small>
                        </div>
                    </button>
                    <img src="/asset/share1.svg"></img>
                </div>
            </div>

            <div className="custom-komentar d-flex flex-column">
                <form onSubmit={submitComment} className="py-4 komentar-box d-flex flex-column">
                    <div>
                        <label for="komentar" className="form-label"><small>Komentar sebagai <b>{props.autentikasi.user?.username}</b></small></label>
                        <textarea className="form-control shadow-none" id="komentar" rows="3" placeholder="Apa yang anda pikirkan?" onChange={(e) => setCommentInput(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-black shadow-none align-self-end mt-3">Komentar</button>
                </form>
                {
                    comments.map((comment, index) => {
                        return (
                            <div className ="py-3 komentar" key={index}>
                                <b>{ comment.user.username }</b>
                                <p>{ comment.content }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Story;