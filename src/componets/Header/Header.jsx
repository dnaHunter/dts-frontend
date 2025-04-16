import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/image.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__widthBand">
          <Link to="/" className="header__logoLink">
            <img src={logo} alt="GOV.UK" className="header__logo" />
          </Link>
        </div>
      </div>
      <div className="header__bar"></div>
    </header>
  );
}
