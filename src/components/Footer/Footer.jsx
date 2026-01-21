import './Footer.css'
import bank1 from '../../assets/visa.jpg'
import bank2 from '../../assets/momo.jpg'
import bank3 from '../../assets/mastercard-16451727301903905825.jpg'
import bank4 from '../../assets/tienmat.jpg'
import bank5 from '../../assets/banking.jpg'
import bank6 from '../../assets/dathongbaobct-150.png'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Cột 1 – Thông tin */}
        <div className="footer-col">
          <h4 className="footer-title">NAILSBN.COM</h4>
          <p>Hộ Kinh Doanh Làm Đẹp</p>
          <p>MST: 8553942254-001</p>
          <p>184/9 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</p>
          <p>Hotline: 0773 956 456</p>
          <p>Email: laptouchvn@gmail.com</p>
          <img src={bank6} alt="Bích Ngọc Nails" className="footer-logo" />
        </div>

        {/* Cột 2 – Thanh toán & Chính sách */}
        <div className="footer-col">
          <h4 className="footer-title">Thanh toán</h4>
          <div className="footer-payments">
            <img src={bank1} alt="" />
            <img src={bank2} alt="" />
            <img src={bank3} alt="" />
            <img src={bank4} alt="" />
            <img src={bank5} alt="" />
          </div>

          <h4 className="footer-title">Chính sách</h4>
          <ul className="footer-links">
            <li>Chính sách thanh toán</li>
            <li>Chính sách khiếu nại</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        {/* Cột 3 – Bản đồ */}
        <div className="footer-col">
          <h4 className="footer-title">Bản đồ</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0820136616812!2d106.65606310000001!3d10.728157700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e40f0ce72bd%3A0x3a4cf9bacaa014f2!2zUE1INCs2Q1csIDU1OSBRTDUwLCBCw6xuaCBIxrBuZywgQsOsbmggQ2jDoW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1768997701779!5m2!1svi!2s"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: 12 }}
            loading="lazy"
            title="Google Maps"
          />
        </div>

        {/* Cột 4 – Fanpage */}
        <div className="footer-col">
          <h4 className="footer-title">Fanpage</h4>
          <iframe
            src="https://www.instagram.com/reel/DBjd9QMSWRE/embed"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            allow="encrypted-media"
            title="Instagram"
          />
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Bích Ngọc Nails. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

