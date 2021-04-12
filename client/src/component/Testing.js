import { useRef, useState } from "react";

const Testing = () => {
    const [cerita, setCerita] = useState({ title: '', content: ''});

    const submit = (e) => {
        e.preventDefault();

        console.log(cerita);
    } 

    const allowTab = (e) => {
        if(e.keyCode == 9) {
            e.target.value += "  ";
            e.preventDefault();
        }
    }

    const handleCerita = (e) => {
        const { name, value } = e.target;

        setCerita({...cerita, [name]: value })
    }

    return(
        <div>
            <form onSubmit={submit} method="POST">
                <input type="text" className="form-control" placeholder="Judul" name="title" onChange={handleCerita}></input>
                {/* <textarea className="form-control" onKeyDown={allowTab} onChange={handleCerita} name="content" placeholder="Ungkapkan keluh kesahmu"></textarea> */}
                <div contentEditable="true" name="content" onChange={handleCerita}>

                </div>
                <input type="submit" value="Ceritakan"></input>
            </form>

            <div className="artikel-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="m-0">Cerita oleh Mega Mendung</h6>
                        <small>Dibuat pada <span className="tanggal-cerita">17 Agustus 1945</span></small>
                    </div>
                    <img src="./asset/share1.svg"></img>
                </div>
                <h1 className="title-cerita  mt-3 mb-5">{ cerita.title }</h1>
                <article className="body-cerita">
                    {
                        cerita.content
                    }
                </article>
                <div className="d-flex justify-content-between align-items-center my-5">
                    <button className="btn shadow-none p-0 m-0">
                        <div className="d-flex align-items-center like-button py-1 px-3">
                            <img src="./asset/unlike1.svg"></img>
                            <b className="px-5">LIKE</b>
                            <small><b className="jumlah-like p-1">999</b></small>
                        </div>
                    </button>
                    <img src="./asset/share1.svg"></img>
                </div>
            </div>
        </div>
    )
}

export default Testing;