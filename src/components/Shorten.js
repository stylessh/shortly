import React, { Component } from "react";
import "../styles/shorten.scss";

import { createShortedLink, getShortedLink } from "../api";

class Shorten extends Component {
  constructor() {
    super();

    this.state = {
      originalLink: "",
      shortedLinks: [],
    };
  }

  componentDidMount() {
    this.renderShortedLinks();
  }

  saveShortedLink(shortedLink) {
    localStorage.setItem(shortedLink.hashid, JSON.stringify(shortedLink));

    this.renderShortedLinks(shortedLink);
  }

  renderShortedLinks() {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    this.setState({
      shortedLinks: values,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { originalLink } = this.state;

    const shortLinkInput = document.querySelector(".short-link");
    const tip = document.querySelector(".tip");
    const expression = /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi;

    const regex = new RegExp(expression);

    // if the input is empty
    if (originalLink === "") {
      shortLinkInput.classList.add("danger");
      tip.innerHTML = "Please add a link";
      tip.style.display = "block";
    } else {
      shortLinkInput.classList.remove("danger");
      tip.style.display = "none";
    }

    // if the original link match with a valid URL.
    if (originalLink.match(regex)) {
      // start fetching dataobject
      const { hashid } = await createShortedLink(originalLink);

      const shortedLink = await getShortedLink(hashid);

      this.saveShortedLink(shortedLink);

      this.setState({
        originalLink: "",
      });
    } else {
      shortLinkInput.classList.add("danger");
      tip.innerHTML = "Enter a valid URL";
      tip.style.display = "block";
    }
  }

  render() {
    return (
      <section className="shorten">
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="short-link"
              value={this.state.originalLink}
              onChange={(e) => {
                this.setState({ originalLink: e.target.value });
              }}
            />
            <Tip />
          </div>

          <button type="submit" className="short-btn">
            Shorten It!
          </button>
        </form>

        <article className="shorted-links">
          {this.state.shortedLinks.length > 0
            ? this.state.shortedLinks.map((shortedLink, i) => {
                const shortedUrl = `https://rel.ink/${shortedLink.hashid}`;

                return (
                  <ShortedLink
                    shortedUrl={shortedUrl}
                    url={shortedLink.url}
                    key={i}
                  />
                );
              })
            : null}
        </article>
      </section>
    );
  }
}

const Tip = () => {
  return <span className="tip">Please add a link</span>;
};

const ShortedLink = ({ shortedUrl, url, index }) => {
  const copyLinkToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <article className="shorted-link">
      <div className="info">
        <p className="original-link">{url}</p>

        <a
          href={shortedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shorted-url"
        >
          {shortedUrl}
        </a>
      </div>

      <button
        className="copy"
        onClick={function (e) {
          copyLinkToClipboard(shortedUrl);

          e.target.innerHTML = "Copied!";
        }}
      >
        Copy
      </button>
    </article>
  );
};

export default Shorten;
