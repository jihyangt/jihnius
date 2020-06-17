import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div id="page-container">
        <div>
          <div className="about-grid-info">
              <img className="pp"></img>
              <div>
              <h1>WERK</h1>
              </div> 
          </div>
        </div>
        <br></br>

        <div className="education container">
          <div class="container-fluid">
            <div class="">
              <div class="">
                <img class="headshot" src={require('../assets/IMG_6689.JPG')} alt="Jih-Yang's headshot"/>
              </div>
              <div class="">
                <h3>Hi, my name is Jih-Yang Tan</h3>
                <p>I am a Marketing and Business Analytics graduate in Vancouver, BC with experience working in high performing, fast-paced organizations.
                  Experienced in developing creative brief and creative content, identifying and analyzing dependencies, managing A/B testing on paid social media campaigns to optimize performance
                </p>
                <p>I enjoy playing basketball, trying out different cuisines (especially Taiwanese!) and walking my dog</p>
              </div>
            </div>
          </div>
          <section id="resume">
            <div class="container-fluid">
              <div class="">
                <div class="">
                  <img class="rounded" src="images/UBC.jpg" alt="Ubc-company"/>
                </div>
                <div class="">
                    <ul>
                      Created and analyzed dashboards and data visualizations using Tableau and Python to optimize KPIs, then recommending solutions to management for review
                    </ul>
                    <ul>
                      Launched and organized contents for Pay-Per-Click LinkedIn Marketing Campaign paired with A/B Testing and installed conversion tracking API focusing on improving conversion rates and client acquisition
                    </ul>
                    <ul>
                      Developed communications and marketing creatives for campus-wide promotions and events using Adobe Suite
                    </ul>
                    <ul>

                      Produced industry reports in various engineering disciplines to assess student employment opportunities
                    </ul>
                </div>
              </div>
              <div class="">
                <div class="">
                  <img class="rounded" src="images/Celtech-PNG-01.png" alt="Celtech-company"/>
                </div>
                <div class="">
                  <ul>
                    Gathered information and examined user behavior and buying trends using SQL and Python to develop business plans and pricing strategies
                  </ul>
                  <ul>
                    Planned, Budgeted, and Managed our Summer Google Ads Marketing campaign, the business result was a 28% increase in B2B sales within 4 months
                  </ul>
                  <ul>
                    Developed the organization’s website using Bootstrap4, HTML5, CSS3, and JavaScript on Wordpress that focuses on usability, this increased pages/session by 32% within 4 months
                  </ul>
                  <div class="">
                    <div class="">
                      <img class="rounded" src="images/UBC.jpg" alt="Ubc-company" />
                    </div>
                    <div class="">
                      <ul>
                        Conducted a marketing budget allocation module for UBC’s post-secondary program applicants
                      </ul>
                      <ul>
                        Entered and analyzed applicant data for the previous 5 academic cohorts to create consumer segments
                      </ul>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </section>     
        </div>
      </div>
    );
  }
}

export default Work;
