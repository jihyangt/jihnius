import React from "react";
import Homepage from "./homepage"
import Work from "./work"
import AboutMe from "./aboutme"

export default function Section({ title, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        {title === 'Home' && <Homepage/>}
        {title === 'Work' && <Work/>}
        {title === 'About Me' && <AboutMe/>}
      </div>
    </div>
  );
}