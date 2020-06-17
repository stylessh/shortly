import React from "react";
import "../styles/statistics.scss";

const Statistics = () => {
  return (
    <section className="statistics">
      <article className="info">
        <h2 className="title">Advanced Statistics</h2>

        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </article>

      <article className="grid-3">
        <div className="one">
          <div className="card">
            <div className="icon">
              <img
                src="/images/icon-brand-recognition.svg"
                alt="Brand Recognition"
              />
            </div>

            <h3>Brand Recognition</h3>

            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="two">
          <div className="card">
            <div className="icon">
              <img
                src="/images/icon-detailed-records.svg"
                alt="Detailed Records"
              />
            </div>

            <h3>Detailed Records</h3>

            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="three">
          <div className="card">
            <div className="icon">
              <img
                src="/images/icon-fully-customizable.svg"
                alt="Fully Customizable"
              />
            </div>

            <h3>Fully Customizable</h3>

            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Statistics;
