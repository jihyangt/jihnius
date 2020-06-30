import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div id="page-container">
        <div class>
          <div className="about-grid-info">
            <div style={{width: '25%'}}><img className="pp"></img></div>
            <div style={{padding: '20px', width: '75%'}}>
              <h5>About Me</h5>
              
              <div style={{marginTop: '40px'}}>
                <h2>I'm Jih-Yang Tan, </h2>
              </div>
            </div>
          </div>
          <div style={{marginTop: '40px'}} className="about-description">
            <p>I was born in Kuala Lumpur, Malaysia, then moved to Taiwan for high-school. As a teenager, my favourite thing to do after a long day of school was to relax on my couch and watch some TV. I saw this particular ad flashing across the screen one day - Michael Jordan for Nike. It suddenly made me realize that the time I waste lying on this couch is time I should be using to live life to the fullest, shooting hoops, studying, and inspiring other people. </p>
            
            <p>Woah, there. I snapped out of my trance, and that was the day I realized what effective marketing could do for people - what this random Nike ad just did to me. I decided then and there that I was going to study marketing. </p>
            
            <p>I was touched by the message, and surprised by the ad's effectiveness, and sought to replicate this feeling of awe through my campaigns. I moved to Vancouver, Canada to pursue further education, graduating with a Bachelor of Commerce in Marketing and Business Analytics from the Sauder School of Business, UBC. Now, I'm able to create amazing customer experiences, and produce memorable campaigns, just like the ones that inspired me. </p>
            
            <p>And, as you may have guessed, I'm a big Michael Jordan fan. So, be it his love for basketball or his work ethic, I strive to bring that into my life as well. I work hard every day to further hone my skills in data analytics and marketing communications. </p>
            
            <p>When I'm not studying or working you can find me making buckets in the basketball courts or trying out new places to eat (especially Taiwanese food!).</p>
          </div>
          <div className="about-resume">
            <div style={{marginBottom: '30px'}}>
              <a href={require('../assets/Jih-Yang Tan_Resume.pdf')} target="_blank" rel="noopener noreferrer" className="download-resume">
                My Resume
              </a>
            </div>
            <br></br>
            <h5>Connect with me! I'm best reached through my personal email or DM through LinkedIn</h5>
          </div>
          <div className="contact-icons">
            <a className="contact-icon" href="mailto:jihyangt@gmail.com">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a className="contact-icon" href="https://www.instagram.com/jih_yang_t/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
              
            <a className="contact-icon" href="https://www.linkedin.com/in/jihyangt/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
