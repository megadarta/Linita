import '../css/Psikolog.css';

function Psikolog() {
  return (
    <div className="custom-lapor d-flex flex-column flex-lg-row">
        <div className="d-flex justify-content-center d-lg-none">
            <img className="img-lapor " src="./asset/woman.png"></img>
        </div>
        <div className="px-5 align-self-center">
            <h1>
            Lorem Ipsum
            </h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sapien diam. Nam consectetur arcu ut justo rhoncus, ac pellentesque eros dapibus. Pellentesque sollicitudin laoreet posuere. Vestibulum iaculis quam a dui posuere, in lacinia augue rutrum. Proin nec dignissim purus. Integer eleifend odio sagittis leo auctor, non interdum tortor malesuada.</h6>
            <button type="button" class="btn btn-primary mt-5">Laporkan</button>
        </div>
        <div className="d-lg-flex justify-content-center d-none">
            <img className="img-lapor " src="./asset/woman.png"></img>
        </div>
        
    </div>
  );
}

export default Psikolog;
