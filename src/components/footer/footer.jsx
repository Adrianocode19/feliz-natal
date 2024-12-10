import MerryChristmas from "../merryChristmas/merryChristmas";
import style from "./footer.module.css";
import logoTwitter from "../../assets/logo-twitter.png";
import logoWhatsapp from "../../assets/logo-whatsapp.png";
import logoInstagram from "../../assets/logo-instagram.png";
import logoFacebook from "../../assets/logo-facebook.png";
import logoGoogle from "../../assets/logo-google.png";

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <MerryChristmas />
        <div className={style.links}>
          <a href="#">
            <img src={logoTwitter} alt="" />
          </a>
          <a href="#">
            <img src={logoWhatsapp} alt="" />
          </a>
          <a href="#">
            <img src={logoInstagram} alt="" />
          </a>
          <a href="#">
            <img src={logoFacebook} alt="" />
          </a>
          <a href="#">
            <img src={logoGoogle} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
