import '../css/Testimoni.css';

function Testimoni() {
    return (
    <div className="testimonials-clean">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Testimonials </h2>
                <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div className="row people">
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div className="author"><img className="rounded-circle foto" src="asset/testi01.png"/>
                        <h5 className="name">Safira Dewi U.</h5>
                        <p className="title-testi">User Linita</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo dui, ornare in diam a, lobortis sollicitudin nulla.</p>
                    </div>
                    <div className="author"><img classNameclassName="rounded-circle foto" src="asset/testi02.png"/>
                        <h5 className="name">Vania Angel</h5>
                        <p className="title-testi">User Linita</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                    </div>
                    <div className="author"><img className="rounded-circle foto" src="asset/testi03.png"/>
                        <h5 className="name">Dita Naura P.</h5>
                        <p className="title-testi">User Linita</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
} 

export default Testimoni;