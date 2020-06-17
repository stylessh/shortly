import React, { Component } from "react";
// components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>

        <Hero />
        <div className="wrapper">
          <Shorten />
          <Statistics />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
