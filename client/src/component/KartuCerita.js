import moment from 'moment';
import { useEffect } from 'react';

const KartuCerita = (props) => {
    return (
        <a href={"/story/view/" + props.story?._id } className="card card-link card-cerita">
            <div className="card-body">
                <h5 className="card-text text-card-cerita text-left last-line">{ props.story?.title }</h5>
                <h6 className="card-text text-card-penulis text-left">Cerita oleh { props.story?.anonimity ? 'Anonim' : props.story?.author.fullname }</h6>
                <p className="content-line my-3">{ props.story?.content }</p>
                <h6 className="card-text text-card-create text-left">Dibuat pada <span className="text-card-tanggal">{ moment(props.story?.created_at).format('LLLL') }</span></h6>
            </div>
        </a>
    )
}

export default KartuCerita;