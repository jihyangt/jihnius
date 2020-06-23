import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div id="page-container">
        <div>
          <div className="about-grid-info">
            <div style={{width: '25%'}}><img className="pp"></img></div>
            <div style={{padding: '20px', width: '75%'}}>
              <h5>About Me</h5>
              <div>
                <h2>I'm Jih-Yang Tan, </h2>
                <h4>Born in Kuala Lumpur, Malaysia</h4>

                <h4>Graduate from Sauder School of Business, UBC in Marketing and Business Analytics.</h4>

                <h4>Passionate about producing amazing customer experiences and creating user stories</h4>

                <h4>When I'm not studying/working you can find me in the basketball courts shooting hoops, or trying out new places to eat! (especially Taiwanese food!).</h4>
              </div>
            </div>
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
