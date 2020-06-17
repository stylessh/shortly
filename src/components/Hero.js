import React from "react";
import "../styles/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="grid-2">
        <article className="info">
          <h1 className="title">More than just shorter links</h1>

          <p className="lead">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="btn">
            Get Started
          </button>
        </article>

        <article className="image">
          <img
            src="/images/illustration-working.svg"
            alt="Illustration Working"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
