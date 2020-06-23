import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Main from "./components/main";
// import dummyText from "./DummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Section
          title="Home"
          id="home"
        />
        <Section
          title="Work"
          id="work"
        /> */}
        {/* <Section
          title="About Me"
          id="about"
        /> */}
        <Main/>
      </div>
    );
  }
}

export default App;