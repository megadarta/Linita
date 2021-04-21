import '../css/Testimoni.css';

function Testimoni() {
    return (
    <div class="testimonials-clean">
        <div class="container">
            <div class="intro">
                <h2 class="text-center">Testimonials </h2>
                <p class="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div class="row people">
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                    </div>
                    <div class="author"><img class="rounded-circle foto" src="asset/testi01.png"/>
                        <h5 class="name">Safira Dewi U.</h5>
                        <p class="title-testi">User Linita</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed justo dui, ornare in diam a, lobortis sollicitudin nulla.</p>
                    </div>
                    <div class="author"><img class="rounded-circle foto" src="asset/testi02.png"/>
                        <h5 class="name">Vania Angel</h5>
                        <p class="title-testi">User Linita</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 item">
                    <div class="box">
                        <p class="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
                    </div>
                    <div class="author"><img class="rounded-circle foto" src="asset/testi03.png"/>
                        <h5 class="name">Dita Naura P.</h5>
                        <p class="title-testi">User Linita</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
} 

export default Testimoni;