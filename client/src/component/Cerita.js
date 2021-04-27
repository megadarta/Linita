import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { server } from '../server.js';
import PreLoader from './PreLoader';
import '../css/Cerita.css';
import moment from 'moment';

const Story = (props) => {
    const history = useHistory();

    const [story, setStory] = useState({ content: '', title: '', anonimity: true });
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);

    const [comentInput, setCommentInput] = useState(null);

    const [loadingStory, setLoadingStory] = useState(true);
    const [loadingComments, setLoadingComments] = useState(true);
    const [loadingAuthor, setLoadingAuthor] = useState(true);
    const [loadLike, setLoadLike] = useState(false);
    const [loadComment, setLoadComment] = useState(false);

    const { id } = useParams();
    const commentRef = useRef(null);

    useEffect(() => {
        fetch(server + 'author/' + id)
        .then(res => res.json())
        .then(data => { 
            setAuthor(data); 
            setLoadingAuthor(false);
        });

        fetch(server + 'story/view/' + id)
        .then(res => res.json())
        .then(data => {
            setStory(data);
            setLoadingStory(false);
        });

        fetch(server + 'comment/' + id)
        .then(res => res.json())
        .then(data => {
            setComments(data);
            setLoadingComments(false);
        });
    }, []);

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

    const upvoteComment = (e) => {
        e.preventDefault();

        const commentID = e.target.id;

        fetch(server + 'comment/upvote', {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ commentID  })
        })
        .then(res => res.json())
        .then(data => {
            fetch(server + 'comment/' + id)
            .then(res => res.json())
            .then(data => {
                setComments(data);
            });
            props.setAutentikasi(data.user);
        })
    }

    const isUser = (e) => {
        if(!props.autentikasi.auth) {
            history.push('/login');
        }
    }

    if(loadingAuthor || loadingComments || loadingStory) {
        return (
            <PreLoader />
        )
    }
    return (
        <div className="container-fluid custom-cerita p-0">
            <div className="artikel-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="m-0">Cerita oleh { story.anonimity ? 'Anonim' : author?.fullname }</h6>
                        <small>Dibuat pada <span className="tanggal-cerita">{ moment(story.created_at).format('LLLL') }</span></small>
                    </div>
                    <img src="/asset/share1.svg"></img>
                </div>
                <h1 className="title-cerita  mt-3 mb-5">{ story.title }</h1>
                <article className="body-cerita">
                    { story.content }
                </article>
                <div className="d-flex justify-content-between align-items-center my-5">
                    {
                        props.autentikasi.auth 
                        ?
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
                        :
                            <a href="/login">
                                <button className={"btn btn-like shadow-none p-0 m-0" + (loadLike ? " button--likeload" : '')} >
                                    <div className="d-flex align-items-center like-button py-1 px-3">
                                        <img src="/asset/unlike1.svg"></img>
                                        <b className="px-3" style={{visibility: loadLike ? 'hidden' : undefined}}>LIKE</b>
                                        <small><b className="jumlah-like p-1">{ story.likes }</b></small>
                                    </div>
                                </button>
                            </a>
                    }
                    
                    <img src="/asset/share1.svg"></img>
                </div>
            </div>

            <div className="custom-komentar d-flex flex-column">
                <form onSubmit={submitComment} className="py-4 komentar-box d-flex flex-column">
                    <div>
                        { props.autentikasi.auth && <label for="komentar" className="form-label"><small>Komentar sebagai <b>{props.autentikasi.user?.username}</b></small></label> }
                        <textarea className="form-control shadow-none" id="komentar" rows="3" placeholder="Apa yang anda pikirkan?" ref={commentRef} onChange={(e) => setCommentInput(e.target.value)} onFocus={isUser} required></textarea>
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
                                <div className="d-flex align-items-center">
                                    <img className="vote" src={ props.autentikasi.user?.likedComments[comment._id] ?  "/asset/upvote-active.svg" : "/asset/upvote.svg"} id={comment._id} onClick={upvoteComment}></img>
                                    <img className="vote" src="/asset/downvote.svg"></img>
                                    <small className="text-muted">{ comment.likes } points</small>
                                    <small className="text-muted mx-1">.</small>
                                    <small className="text-muted">{ moment(comment.created_at).fromNow() }</small>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Story;