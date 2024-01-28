import logo from "../assets/Logo.svg";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Header;
