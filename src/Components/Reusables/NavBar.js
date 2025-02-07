//App
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Component
import Popup from "./Popup";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

//Style
import "./NavBar.css";

const NavBar = () => {
  //button logic
  const [button, setButton] = useState(true);

  //Navbar link logic
  const [selectedLink, setSelectedLink] = useState(null);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setMenuOpen(!menuOpen);
  };

  //Mobile NavBar logic
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  //dropdown logic
  const [popup, setPopup] = useState(false);
  const handlePopupClick = () => {
    setPopup(!popup);
    setMenuOpen(!menuOpen);
  };

  //Navigation logic
  const navigate = useNavigate();

  //Home Icon navigate
  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <>
      <nav>
        <div className="logo-container" onClick={handleHomeClick}>
          <img src="assets/Logo.png" alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`nav-menu-items ${menuOpen ? "active" : ""}`}>
          <div className="close-button">
            <i onClick={handleToggleMenu}>
              <FontAwesomeIcon icon={faX} />
            </i>
          </div>
          <Link
            to="/home"
            onClick={() => handleLinkClick("home")}
            className={selectedLink === "home" ? "selected" : ""}
          >
            Home
          </Link>
          <a href="#">About Us</a>
          <Link
            to="/donate-blood"
            onClick={() => handleLinkClick("donate")}
            className={selectedLink === "donate" ? "selected" : ""}
          >
            Donate Blood
          </Link>
          <Link
            to="/donor-select"
            onClick={() => handleLinkClick("donor-selec")}
            className={selectedLink === "donor-selec" ? "selected" : ""}
          >
            Find Donor
          </Link>

          <Link
            to="#"
            onClick={() => handlePopupClick()}
            className={selectedLink === "register" ? "selected" : ""}
          >
            Register
          </Link>
          <a href="#">Contact Us</a>
        </ul>
        <div className="button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--small">
              Get Started
            </Button>
          )}
        </div>
      </nav>
      {popup && <Popup />} {/* Render the dropdown conditionally */}
    </>
  );
};

export default NavBar;
