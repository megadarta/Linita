import { server } from '../server.js';

const KartuArtikel1 = (props) => {
    return (
        <a href={"/article/view/" + props.article._id } class="card artikel-card mt-5">
            <img src={server + 'public/' + props.article.image.path} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{props.article.title}</h5>
            </div>
        </a>
    )
}

export default KartuArtikel1;