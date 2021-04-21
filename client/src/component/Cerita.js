import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { server } from '../server.js';
import PreLoader from './PreLoader';
import '../css/Cerita.css';
import moment from 'moment';

const Story = (props) => {
    const [story, setStory] = useState({});
    const [comments, setComments] = useState([]);
    const [comentInput, setCommentInput] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadLike, setLoadLike] = useState(false);
    const [loadComment, setLoadComment] = useState(false);
    const { id } = useParams();
    const commentRef = useRef(null);

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

        if(!loadComment) {
            setLoadComment(true);
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
                commentRef.current.value = '';
                fetch(server + 'comment/' + id)
                .then(res => res.json())
                .then(data => {
                    setLoadComment(false);
                    setComments(data);
                });
            });
        }
    }

    const likeStory = (e) => {
        e.preventDefault();
        if(!loadLike) {
            setLoadLike(true);
            fetch(server + 'story/like', {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ storyID: id })
            })
            .then(res => res.json())
            .then(data => {
                setStory(data.story);
                props.setAutentikasi(data.user);
                setLoadLike(false);
            })
        }
    }

    const unlikeStory = (e) => {
        e.preventDefault();
        if(!loadLike) {
            setLoadLike(true);
            fetch(server + 'story/unlike', {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ storyID: id })
            })
            .then(res => res.json())
            .then(data => {
                setStory(data.story);
                props.setAutentikasi(data.user);
                setLoadLike(false);
            })
        }
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
                        <small>Dibuat pada <span className="tanggal-cerita">{ moment(story.created_at).fromNow() }</span></small>
                    </div>
                    <img src="/asset/share1.svg"></img>
                </div>
                <h1 className="title-cerita  mt-3 mb-5">{ story.title }</h1>
                <article className="body-cerita">
                    { story.content }
                </article>
                <div className="d-flex justify-content-between align-items-center my-5">
                    {
                        props.autentikasi.user?.likes[id]
                        ? 
                            <button className={"btn btn-like shadow-none p-0 m-0" + (loadLike ? " button--likeload" : '')} onClick={unlikeStory}>
                                <div className="d-flex align-items-center like-button py-1 px-3">
                                    <img src="/asset/like1.svg"></img>
                                    <b className="px-3" style={{visibility: loadLike ? 'hidden' : undefined}}>LIKE</b>
                                    <small><b className="jumlah-like p-1">{ story.likes }</b></small>
                                </div>
                            </button> 
                        :
                            <button className={"btn btn-like shadow-none p-0 m-0" + (loadLike ? " button--likeload" : '')} onClick={likeStory}>
                                <div className="d-flex align-items-center like-button py-1 px-3">
                                    <img src="/asset/unlike1.svg"></img>
                                    <b className="px-3" style={{visibility: loadLike ? 'hidden' : undefined}}>LIKE</b>
                                    <small><b className="jumlah-like p-1">{ story.likes }</b></small>
                                </div>
                            </button>
                    }
                    
                    <img src="/asset/share1.svg"></img>
                </div>
            </div>

            <div className="custom-komentar d-flex flex-column">
                <form onSubmit={submitComment} className="py-4 komentar-box d-flex flex-column">
                    <div>
                        <label for="komentar" className="form-label"><small>Komentar sebagai <b>{props.autentikasi.user?.username}</b></small></label>
                        <textarea className="form-control shadow-none" id="komentar" rows="3" placeholder="Apa yang anda pikirkan?" ref={commentRef} onChange={(e) => setCommentInput(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className={ "btn btn-black btn-comment shadow-none align-self-end mt-3 " + ( loadComment && 'button--loading' )}>
                        <span style={{visibility: loadComment ? 'hidden' : undefined}}>Komentar</span>
                    </button>
                </form>
                {
                    comments.map((comment, index) => {
                        return (
                            <div className ="py-3 komentar" key={index}>
                                <b>{ comment.user.username }</b>
                                <div>{ comment.content }</div>
                                <small className="text-muted">{ moment(comment.created_at).fromNow() }</small>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Story;