import '../css/Footer.css';

function Footer() {
  return (
    <div className="custom-footer">
      <div className=" d-flex flex-column align-items-center footer-top">
          <div className="imageMedsos d-flex mt-4 justify-content-between">
            <a href="https://wa.me/+6288996031198"><img className="waImg" src="./asset/wa.png"></img></a>
            <a href="https://web.facebook.com/meyga.putrird/"><img className="waImg" src="./asset/fb.png"></img></a>
            <a href="https://www.instagram.com/megadrta/"><img className="waImg" src="./asset/ig.png"></img></a>
            
          </div>
          <div className="ft-text d-flex mt-3 justify-content-between">
            <a href="" className="ft-text-href">Home</a>
            <a href="" className="ft-text-href">Cerita</a>
            <a href="" className="ft-text-href">Mulai Beraksi</a>
            <a href="" className="ft-text-href">Artikel</a>
          </div>
      </div>
      <div className="footer-bottom d-flex flex-column align-items-center">
        <p className="fb-texttop mt-3">LINITA OFFICIAL WEBSITE, CREATED BY BBM TEAM</p>
        <p className="fb-textbottom">©Copyright linita 2021.  All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
