import '../css/Lapor.css';

function Lapor() {
  return (
    <div className="body-lapor d-flex align-items-center justify-content-end">
    <div className="custom-lapor">
        <div className="konten-lapor">
            {/* title */}
            <h1>
              <b>
                Lorem ipsum dolor sit amet. 
              </b>
            </h1>

            {/* description */}
            <p className="lapor-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sapien diam. Nam consectetur arcu ut justo rhoncus, ac pellentesque eros dapibus. Pellentesque sollicitudin laoreet posuere. Vestibulum iaculis quam a dui posuere, in lacinia augue rutrum. Proin nec dignissim purus. Integer eleifend odio sagittis leo auctor, non interdum tortor malesuada.</p>
            <button type="button" class="btn btn-color button-lapor">LAPORKAN</button>
        </div>
    </div>
    </div>
   
  );
}

export default Lapor;
