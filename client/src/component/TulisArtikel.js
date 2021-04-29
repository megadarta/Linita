import { useState } from "react";
import { server } from '../server.js';

const TulisArtikel = () => {
    const [form, setForm] = useState({});

    const inputArticle = (e) => {
        e.preventDefault();

        setForm({...form, [e.target.name]: e.target.value });
    }

    const submitArticle = (e) => {
        e.preventDefault();

        fetch(server + 'article/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    return (
        <form onSubmit={submitArticle} className="d-flex flex-column">
            <input type="text" placeholder="judul" name="title" onChange={inputArticle}></input>
            <input type="text" placeholder="image path" name="imagePath" onChange={inputArticle}></input>
            <input type="text" placeholder="image alt" name="imageAlt" onChange={inputArticle}></input>
            <input type="text" placeholder="reference" name="reference" onChange={inputArticle}></input>
            <textarea name="content" onChange={inputArticle}></textarea>
            <input type="submit" value="submit"></input>
        </form>
    )
}

export default TulisArtikel;