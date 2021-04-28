import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { server } from '../server.js';
import moment from 'moment';
import '../css/Profile.css';

const Profile = (props) => {
    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        fetch(server + 'user/' + id)
        .then(res => res.json())
        .then(data => { 
            setUser(data); 
        });
    }, [])
    return (
        <div className="profile-body container py-5">
            <div className="d-flex align-items-center">
                <img src="/asset/Linita-IconOnly.svg" width="150" height="150"></img>
                <div>
                    <h1>{ user?.username }</h1>
                    <div><small> { user?.fullname }</small></div>
                    <div><small> { user?.nik }</small></div>
                </div>
            </div>
            <div className="profile-stories">
                <h3 className="mt-5"> Stories </h3>
                <hr></hr>
                {
                    user?.stories.map((story, index) => {
                        return (
                            <div key={index} className="profile-story p-3 d-flex align-items-center justify-content-between"> 
                                <a href={`/story/view/${story._id}`} className="story-link">
                                    <h3>{story.title }</h3>
                                    <small> { moment(story.created_at).format('LLLL') } </small>
                                </a>
                                { props.autentikasi.user?._id === id &&
                                <div className="d-flex">
                                    <i className="fas fa-edit mx-5"></i>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                }
                            </div>
                        );
                    }) 
                }
            </div>
        </div>
    )
}

export default Profile;