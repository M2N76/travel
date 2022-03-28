import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  useEffect(() => {
    showButton();
  }, []);
  const menuClickHandler = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  };
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Travel
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={menuClickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                صفحه اصلی
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tourism"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                گردشگری
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tour" className="nav-links" onClick={closeMobileMenu}>
                تور
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                ثبت نام
              </Link>
            </li>
          </ul>

          {buttonState ? (
            <Button buttonStyle={"btn--outline"}>ثبت نام</Button>
          ) : null}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
