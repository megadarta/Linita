import '../css/Cerita.css';

const Story = () => {
    return (
        <div className="container-fluid custom-cerita p-0">
            <div className="artikel-section">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 className="m-0">Cerita oleh Mega Mendung</h6>
                        <small>Dibuat pada <span className="tanggal-cerita">17 Agustus 1945</span></small>
                    </div>
                    <img src="./asset/share1.svg"></img>
                </div>
                <h1 className="title-cerita  mt-3 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum</h1>
                <article className="body-cerita">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum, magna non sagittis tincidunt, mauris odio interdum lectus, id luctus quam odio eu eros. Suspendisse nec risus quis lectus vehicula pellentesque. Nunc vulputate efficitur libero eu dictum. Nunc augue odio, efficitur id felis ut, tincidunt tristique nunc. Pellentesque pellentesque, sem quis rhoncus faucibus, massa eros ullamcorper ipsum, quis sollicitudin ante nunc nec dolor. Etiam imperdiet maximus porta. In hac habitasse platea dictumst. Vestibulum eget quam pulvinar, convallis quam id, ultricies tortor. Morbi commodo lectus mauris, sed placerat eros tristique et.
                    
                    Praesent purus odio, aliquet convallis turpis ut, varius fermentum lorem. Proin facilisis ornare purus, vel cursus elit egestas quis. Ut lacinia nec est quis bibendum. Fusce volutpat, ex ac aliquam egestas, elit velit congue libero, nec fringilla justo sem quis massa. Donec non odio ut neque semper vulputate. Nulla eget magna commodo, scelerisque magna at, molestie est. Fusce posuere viverra lacus id ornare. Vestibulum facilisis tincidunt est in porta. Vivamus luctus gravida consectetur. Sed vestibulum posuere neque vel ultricies. Etiam blandit ligula id finibus luctus. Integer nec nulla quis neque vehicula iaculis eget et turpis. Nullam ullamcorper aliquet mollis.

                    Ut mattis, sem eu sagittis elementum, tortor quam tempor nisl, non faucibus diam lectus id metus. Ut metus ipsum, interdum sit amet blandit in, auctor a dui. Phasellus ipsum diam, gravida eget rutrum ut, vulputate non nunc. Nunc id vehicula dolor, dictum malesuada magna. Proin sodales quam vitae arcu placerat, in condimentum tellus sagittis. Sed sed ligula vestibulum nisl porta cursus nec eu enim. Aliquam a libero quis turpis congue cursus et a dolor. Cras in magna quis orci viverra malesuada vel eget odio. Donec mollis gravida tincidunt. Aenean egestas enim eget mi congue condimentum. Suspendisse iaculis odio in quam mollis, nec porta magna porta. Nulla fringilla tempus accumsan.

                    Nam ultricies tempor lectus in consequat. Praesent pulvinar metus et quam porttitor, ut sodales urna ornare. Duis justo ante, porta et vehicula eget, porta nec justo. Quisque sed dui fringilla, pretium diam non, volutpat arcu. Duis vulputate fringilla orci, nec viverra mi luctus id. Maecenas consequat felis viverra nibh mollis, id condimentum erat sodales. Sed id lorem non nunc aliquet fermentum non ac dolor. Suspendisse dictum, dui sit amet suscipit ultricies, mi diam bibendum sapien, tempor rhoncus arcu nibh quis nibh. Praesent porttitor mauris ac sapien imperdiet rhoncus. Nullam purus turpis, maximus eget ultrices sed, viverra quis ligula.

                    Ut luctus blandit enim, nec vestibulum tellus gravida aliquam. Sed et ultricies nisi, id blandit metus. Duis dictum magna non mauris sollicitudin venenatis. Maecenas at condimentum urna. Quisque luctus consequat erat sit amet posuere. Pellentesque sit amet sem vel diam vestibulum convallis vitae quis libero. Phasellus rhoncus gravida luctus. Ut in tempus sem.

                    Donec non volutpat sem, quis eleifend mi. Curabitur ac placerat ante. Cras at massa ex. Fusce luctus lectus ut aliquet mattis. Mauris mollis vel libero quis commodo. Curabitur at augue eu erat tincidunt finibus. Nulla tincidunt faucibus justo sit amet pellentesque. Mauris pellentesque augue ac lectus rutrum, eget venenatis neque finibus.
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

            <div className="custom-komentar d-flex flex-column">
                <form className="py-4 komentar-box d-flex flex-column">
                    <div>
                        <label for="komentar" className="form-label"><small>Komentar sebagai <b>Bintang Tampan</b></small></label>
                        <textarea className="form-control shadow-none" id="komentar" rows="3" placeholder="Apa yang anda pikirkan?"></textarea>
                    </div>
                    <button type="button" className="btn btn-black shadow-none align-self-end mt-3">Komentar</button>
                </form>
                 <div className ="py-3 komentar">
                    <b>Bintang Kejora</b>
                    <p>Nam ultricies tempor lectus in consequat. Praesent pulvinar metus et quam porttitor, ut sodales urna ornare. Duis justo ante, porta et vehicula eget, porta nec justo.</p>
                    <div className="d-flex align-items-center">
                        <img src="./asset/reply1.svg"></img>
                        <div className="mx-2">Balas</div>
                    </div>
                 </div>
                 <div className ="py-3 komentar">
                    <b>Bintang Kejora</b>
                    <p>Nam ultricies tempor lectus in consequat. Praesent pulvinar metus et quam porttitor, ut sodales urna ornare. Duis justo ante, porta et vehicula eget, porta nec justo.</p>
                    <div className="d-flex align-items-center">
                        <img src="./asset/reply1.svg"></img>
                        <div className="mx-2">Balas</div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Story;