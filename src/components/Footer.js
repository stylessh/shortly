import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Boost />

      <section className="info">
        <div className="grid-3">
          <article className="logo">
            <h3>Shortly</h3>
          </article>

          <article className="other-links">
            <div className="features">
              <h4>Features</h4>

              <button>Link Shortening</button>
              <button>Branded Links</button>
              <button>Analytics</button>
            </div>

            <div className="resources">
              <h4>Resources</h4>
              <button>Blog</button>
              <button>Developers</button>
              <button>Support</button>
            </div>

            <div className="company">
              <h4>Company</h4>
              <button>About</button>
              <button>Our Team</button>
              <button>Careers</button>
              <button>Contact</button>
            </div>
          </article>

          <article className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon ion-logo-facebook"></i>
            </a>
            <a
              href="https://twitter.com/stylesshDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon ion-logo-twitter"></i>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon ion-logo-pinterest"></i>
            </a>
            <a href="https://instagram.com/but.first.books">
              <i className="icon ion-logo-instagram"></i>
            </a>
          </article>
        </div>
      </section>
    </footer>
  );
};

const Boost = () => (
  <section className="boost">
    <article className="text">
      <h3>Boost your links today</h3>
      <button className="btn">
        Get Started
      </button>
    </article>
  </section>
);

export default Footer;
