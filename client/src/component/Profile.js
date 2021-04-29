import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { server } from '../server.js';
import moment from 'moment';
import PreLoader from './PreLoader';
import '../css/Profile.css';

const Profile = (props) => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [hasStories, setHasStories] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(server + 'user/' + id)
        .then(res => res.json())
        .then(data => {
            console.log(data.stories.length);
            if(data.stories.length === 0) setHasStories(false) 
            setUser(data); 
            setLoading(false);
        });
    }, []);

    const deleteStory = (e) => {
        e.preventDefault();

        const storyID = e.currentTarget.id;
       
        fetch(server + 'story/delete', {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ storyID })
        })
        .then(res => res.json())
        .then(data => { 
            fetch(server + 'user/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data.stories.length);
                if(data.stories.length === 0) setHasStories(false) 
                setUser(data); 
                setLoading(false);
            });
        });
    }

    if(loading) {
        return(
            <div className="profile-body">
                <PreLoader />
            </div>
        )
    }

    return (
        <div className="profile-body container py-5">
            <div className="d-flex flex-column flex-md-row align-items-center">
                <img src="/asset/Linita-IconOnly.svg" width="150" height="150"></img>
                <div>
                    <h1>{ user?.username }</h1>
                    <div><small> { user?.fullname }</small></div>
                    <div><small> { user?.nik }</small></div>
                </div>
            </div>
            <div className="profile-stories">
                <h3 className="mt-5"> Cerita </h3>
                <hr></hr>
                {
                    hasStories
                    ?
                        user?.stories.map((story, index) => {
                            return (
                                <div key={index} className="profile-story mt-5 p-3 d-flex flex-column flex-md-row align-items-center justify-content-between"> 
                                    <a href={`/story/view/${story._id}`} className="story-link">
                                        <h3>{story.title }</h3>
                                        <small> { moment(story.created_at).format('LLLL') } </small>
                                    </a>
                                    { props.autentikasi.user?._id === id &&
                                    <div className="d-flex align-items-center mt-3 mt-md-0">
                                        <span onClick={deleteStory} id={story._id} className="mx-4"><i  className="fa fa-trash btn-delete" aria-hidden="true"></i></span>
                                    </div>
                                    }
                                </div>
                            );
                        })
                    :
                        <h3 className="text-muted text-center">Tidak ada cerita</h3>
                }
            </div>
        </div>
    )
}

export default Profile;