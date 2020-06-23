import React from "react";
import Homepage from "./homepage"
import Work from "./work"
import AboutMe from "./aboutme"

export default class HomeMain extends React.Component  {

  componentDidMount() {
    console.log('mount', this.props.location.state)
    if(this.props.location.state){
        document.getElementById('work').scrollIntoView({
            behavior: 'smooth'
        });
    }
  }

  render () {
    return (
        <div className={"section"}>
          <div className="section-content" id="home">
            <Homepage/>
          </div>
          <div className="section-content-work" id="work">
            <Work/>
          </div>
        </div>
      );
  }
}