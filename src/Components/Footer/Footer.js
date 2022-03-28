import React from "react";
import "./Footer.css";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          به خبرنامه ما بپیوندید تا از آفرهای تورهای ایرانگردی و جهانگردی با خبر
          شوید
        </p>
        <p className="footer-subscription-text">
          هر زمان که بخواهید میتوانید عضویت خود را لغو نمایید
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="ایمیل خود را وارد کنید"
            />
            <Button buttonStyle="btn--special">عضویت</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>درباره ما</h2>
            <Link to="/">موقعیت های شغلی</Link>
            <Link to="/">تماس با ما</Link>
            <Link to="/">همکاری با ما</Link>
          </div>
          <div className="footer-link-items">
            <h2>راهنما</h2>
            <Link to="/">نقشه سایت</Link>
            <Link to="/">سوال های متداول</Link>
            <Link to="/">حریم شخصی</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>رزور </h2>
            <Link to="/">رزور هتل</Link>
            <Link to="/">رزور بلیط هواپیما</Link>
            <Link to="/">رزرو بلیط قطار</Link>
          </div>
          <div className="footer-link-items">
            <h2 style={{ fontSize: "18px" }}>شبکه های اجتماعی</h2>
            <Link to="/">اینستاگرام</Link>
            <Link to="/">توییتر</Link>
            <Link to="/">لینکدین</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              Travel <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">Travel © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
              to="/"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
              to="/"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
              to="/"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              target="_blank"
              aria-label="Linkedin"
              to="/"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;
