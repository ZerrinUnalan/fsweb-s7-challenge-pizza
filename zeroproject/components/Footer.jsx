import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="address-container">
          <img
            className="footer-logo"
            src="../../Assets/mile2-aseets/footer/logo-footer.svg"
            alt="logo-footer.png"
          />
          <address className="address">
            <div>
              <img
                src="../../Assets/mile2-aseets/footer/icons/icon-1.png"
                alt="Address Icon"
              />
              <p>341 Londonderry Road, Istanbul Türkiye</p>
            </div>
            <div>
              <img
                src="../../Assets/mile2-aseets/footer/icons/icon-2.png"
                alt="Address Icon"
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div>
              <img
                src="../../Assets/mile2-aseets/footer/icons/icon-3.png"
                alt="Address Icon"
              />
              <p>+90 216 123 45 67</p>
            </div>
          </address>
        </div>
        <div className="footer-menuler">
          <h4>Sıcacık Menuler</h4>
          <div>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hackathlon Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div className="footer-photos">
          <h4>Instagram</h4>
          <div>
            <img
              src="../../Assets/mile2-aseets/footer/insta/li-0.png"
              alt="img-0"
            />
            <img
              src="../../Assets/mile2-aseets/footer/insta/li-1.png"
              alt="img-1"
            />
            <img
              src="../../Assets/mile2-aseets/footer/insta/li-2.png"
              alt="img-2"
            />
            <img
              src="../../Assets/mile2-aseets/footer/insta/li-3.png"
              alt="img-3"
            />
            <img
              src="../../Assets/mile2-aseets/footer/insta/li-4.png"
              alt="img-4"
            />
            <img
              src="../../Assets/mile2-aseets/footer/insta/li-5.png"
              alt="img-5"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler</p>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </footer>
  );
}
