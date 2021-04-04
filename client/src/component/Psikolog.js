import '../css/Psikolog.css';

function Psikolog() {
  return (
    <div className="body-psikolog d-flex align-items-center">
    <div className="custom-psikolog">
        <div className="konten-psikolog">
            {/* title */}
            <h1>
              <b>
                Lorem ipsum dolor sit amet. 
              </b>
            </h1>

            {/* description */}
            <p className="psikolog-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sapien diam. Nam consectetur arcu ut justo rhoncus, ac pellentesque eros dapibus. Pellentesque sollicitudin laoreet posuere. Vestibulum iaculis quam a dui posuere, in lacinia augue rutrum. Proin nec dignissim purus. Integer eleifend odio sagittis leo auctor, non interdum tortor malesuada.</p>
            <button type="button" class="btn btn-color button-psikolog">KONSULTASI</button>
        </div>
    </div>
    </div>
   
  );
}

export default Psikolog;
