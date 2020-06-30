import React, { Component } from 'react';
import Collapisble from 'react-collapsible'
import Graphs from './graphs'
import '../assets/Collapsible.scss';

class Work extends Component {
  render() {
    return (
      <div id="page-container">
        <Collapisble transitionTime={400} trigger="UBC Engineering" triggerClassName="CustomTriggerCSS" triggerOpenedClassName="CustomTriggerCSS--open">
          <div className="bcgj-main">
            <div style={{maxWidth:'700px', marginTop: '20px'}}>
              <h5>
              UBC Engineering Co-op is the largest co-op program in Western Canada and one of the most successful programs in the country. Industry leaders look to us as their first choice when recruiting engineering talent, and our students benefit from paid, relevant, and technical work experiences that help them become the engineers of tomorrow.
              </h5>
            </div>
          </div>
          <div className="bcgj-main">
            <h3>Campus Promotions</h3>
            <div className="bcgj-poster">
              <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/001.jpg')}></img>
              <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/002.jpg')}></img>
            </div>
            <div>
              <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Eng_Coop1.jpg')}></img>
              <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Eng_Coop2.jpg')}></img>
            </div>
          </div>
          <div className="bcgj-main">
            <h3>LinkedIn A/B Campaign</h3>
            <div className="bcgj-poster">
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Linkedin AB-1-1.jpg')}></img>
                <h5>LinkedIn 1-1</h5>
              </div>
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Linkedin AB-1-2.jpg')}></img>
                <h5>LinkedIn 1-2</h5>
              </div>
            </div>
            <div className="bcgj-poster">
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Linkedin AB-2-1.jpg')}></img>
                <h5>LinkedIn 2-1</h5>
              </div>
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Linkedin AB-2-2.jpg')}></img>
                <h5>LinkedIn 2-2</h5>
              </div>
            </div>
          </div>
          <div className="bcgj-main">
            <h3>Marketing Analytics</h3>
            <h5>Visualizations were produced with Linkedin Ad Data and Python utilizing Plotly and Pandas plotting libraries</h5>
            <div>
              <h3 style={{marginTop: '50px'}}>Performance</h3>
              <div className="graphs-box">
                <iframe width="650" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jihyangt/6.embed"></iframe>
                <div style={{maxWidth: '620px'}}>
                  <p>
                  This regression line provides a better understanding of campaign performance over time. We can see that total engagement increases around Day 0-14 and remains roughly stable. After performing and executing A/B Testing, we saw a 20-30% increase in Total Engagement over each of our A/B test groups, whilst maintaining the same budget.
                  </p>
                </div>
              </div>
              <div>
                <iframe width="650" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jihyangt/1.embed"></iframe>
                <div style={{maxWidth: '620px'}}>
                  <p>
                    To investigate the Social Engagement Rate for each A/B test, I made a boxplot to break down reactions, shares, comments, and some clicks on links, videos, and images. On this boxplot, we can clearly see that Linkedin 2-2 is performing worse than its counterparts. This leaves us with 3 well-performing ads to run
                  </p>
                </div>
              </div>
            </div>
            <div>
              <iframe width="1000" height="700" frameborder="0" scrolling="no" src="//plotly.com/~jihyangt/4.embed"></iframe>
              <h3>Press Play!</h3>
              <p>This interactive graph shows the Clicks/Ad over time. In addition, I've included budget in the x-axis so we can clearly see the Total CAD Spent vs Clicks for each individual A/B test, this allows us to evaluate Ad ROI(Return on Investment) and effectiveness. Linkedin 2-2 halted around day 15 because it was performing less than expected.</p>
            </div>
          </div>
          <div className="bcgj-main">
            <h3>Demographics</h3>
            <div className="graphs-box">
              <div>
                <iframe width="650" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jihyangt/8.embed"></iframe>
                <p>This graph analyzes who clicks our Ad and the company size they are in. This graph allows us to quickly identify the most engaged company sizes, which are:</p>
                <p>A) Small companies (1-50 employees)</p>
                <p>B) Very large organizations (>10000 employees)</p>
                <p>C) Medium companies(51-200)</p>
              </div>
              <div>
                <iframe width="650" height="500" frameborder="0" scrolling="no" src="//plotly.com/~jihyangt/10.embed"></iframe>
                <p>
                This treemap analyzes who clicks our Ad and the industry they are in. From this visualization, we are able to prioritize our most engaging industries to-date which are:</p>

                <p> A) Oil and Energy</p>
                <p>B) Construction</p>
                <p>C)Computer Software</p>

                <p>From this visualization, we will be able to perform business development/sales strategies to prioritize our actions, to better increase our conversion rate.</p>

              </div>
            </div>
          </div>
          <div className="bcgj-main">
            <h3>Internal Communication Designs</h3>
            <div style={{display: 'block'}}>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Supervisor Guidelines_0001.jpg')}></img>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Supervisor Guidelines_0002.jpg')}></img>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Supervisor Guidelines_0003.jpg')}></img>
            </div>
          </div>
          <div className="bcgj-main">
            <h3>Christmas Greetings!</h3>
            <div className="bcgj-poster">
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Seasons Greetings 2019_B.jpg')}></img>
              </div>
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ecoop/Seasons Greetings 2019_C.jpg')}></img>
              </div>
            </div>
          </div>
          <div className="bcgj-main">
            <h5>Check out my web-Development for UBC Engineering: </h5>
            <h5><a href ="https://coop.engineering.ubc.ca">Engineering Co-op</a></h5>
            <h5><a href ="https://pd.engineering.ubc.ca">Engineering Professional Development</a></h5>
            
          </div>
        </Collapisble>
        <Collapisble transitionTime={400} trigger="Celtech" triggerClassName="CustomTriggerCSS" triggerOpenedClassName="CustomTriggerCSS--open">
          <h5>Check out this website I made: <a href='http://celtech.com.my/'>Celtech</a></h5>
        </Collapisble>
        <Collapisble transitionTime={400} trigger="BC Game Jam" triggerClassName="CustomTriggerCSS" triggerOpenedClassName="CustomTriggerCSS--open">
          <div className="bcgj-main">
            <h5>A 48-hour event where game enthusiasts come together and create a game based on a theme</h5>
            <div className="bcgj-poster">
              <div>
                <img className='bcgj-pic-main shadow' src={require('../assets/ggj/GameJam_Poster.jpg')}></img>
              </div>
              <div>
              <iframe className="shadow" width="560" height="315" src="https://www.youtube.com/embed/FfD48Ryepv4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="bcgj-main">
              <h3>Pre-Event Promotions</h3>
              <div className="grid">
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Countdown4.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Countdown3.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Countdown2.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Countdown1.jpg')}></img>
              </div>
            </div>
            <div className="bcgj-main">
              <h3>Main Event Gallery</h3>
              <div className="grid">
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo1.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo2.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo3.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo4.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo5.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo6.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo7.jpg')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/GameJam_Photo8.jpg')}></img>
              </div>
            </div>
            <div className="bcgj-main">
              <h3>Our Sponsors</h3>
              <div className="grid">
                <img className='bcgj-pic' src={require('../assets/ggj/Logo_Eastside.png')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/Logo_Raccoopackstudios.jpg')}></img>
                <img className='bcgj-pic' src={require('../assets/ggj/Logo_Hellbent.png')}></img>
                <img className='bcgj-pic shadow' src={require('../assets/ggj/Logo_Kabam.png')}></img>
              </div>
            </div>
            <h4>BC Game Jam Social Media</h4>
            <div className="contact-icons">
              <a className="contact-icon-purple" href="https://www.facebook.com/bcgamejam/">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a className="contact-icon-purple" href="https://www.instagram.com/bcgamejam/" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
                
              <a className="contact-icon-purple" href="https://twitter.com/bcgamejam" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Collapisble>
        <Collapisble transitionTime={400} trigger="UBC Taiwanese Association" triggerClassName="CustomTriggerCSS" triggerOpenedClassName="CustomTriggerCSS--open">
          <div style={{paddingBottom: '30px'}}>
            <h3>Mission</h3>
            <p>促進會員間的交流 - Enhance communications between individuals</p>

            <p>推廣臺灣文化和促進其他文化與會員的交流 - Promote Taiwanese culture</p>

            <p>提供會員額外的學術活動 - Provide Extracurricular Activities Opportunities</p>

            <p>保持政治和宗教中立 - Remain neutral in political and religious views</p>

            <p>不營利、自動自發 - Achiving a non-profit and self-motivated organization</p>
          </div>

          <div className="bcgj-main">
            <h3>Event Video Promotion</h3>
            <div className="bcgj-poster" >
              <div style={{margin: '10px'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_utCd02N_PE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div style={{margin: '10px'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RPymQhsH2jw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="bcgj-main">
              <h3 style={{marginBottom: '30px', marginTop: '30px'}}>Social Media Promotion</h3>
              <div className="bcgj-main">
                <img className='ta-pic shadow' src={require('../assets/ubcta/Poster_Foodie.jpg')}></img>
                <img className='ta-pic shadow' src={require('../assets/ubcta/Poster_Basketball.jpg')}></img>
                <img className='ta-pic shadow' src={require('../assets/ubcta/Poster_Club.jpg')}></img>
                <img className='ta-pic shadow' src={require('../assets/ubcta/Poster_Food.jpg')}></img>
                <img className='ta-pic shadow' src={require('../assets/ubcta/Poster_Illuminated.jpg')}></img>
                <img className='ta-pic shadow' src={require('../assets/ubcta/Poster_Sugar.jpg')}></img>
              </div>
            </div>
            <h4>UBCTA Social Media</h4>
            <div className="contact-icons">
              <a className="contact-icon-lb" href="https://www.facebook.com/UBCTA/">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a className="contact-icon-lb" href="https://www.instagram.com/ubcta/" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Collapisble>
      </div>
    );
  }
}

export default Work;
