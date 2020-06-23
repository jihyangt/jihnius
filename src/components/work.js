import React, { Component } from 'react';
import Collapisble from 'react-collapsible'
import '../assets/Collapsible.scss';

class Work extends Component {
  render() {
    return (
      <div id="page-container">
        <Collapisble transitionTime={400} trigger="UBC Engineering">
          <div>
            <h5>
              We are the largest co-op program in Western Canada and one of the most successful programs in the country. Industry leaders look to us as their first choice when recruiting engineering talent, and our students benefit from paid, relevant, and technical work experiences that help them become the engineers of tomorrow.
            </h5>
          </div>
        </Collapisble>
        <Collapisble transitionTime={400} trigger="Celtech">
          
        </Collapisble>
        <Collapisble transitionTime={400} trigger="BC Game Jam">
          <div>
            <h5>A 48-hour event where game enthusiasts come together and create a game based on a theme</h5>
          </div>
        </Collapisble>
        <Collapisble transitionTime={400} trigger="UBC TA">
          <div>
            <h5>Mission</h5>
            <h6>促進會員間的交流 Enhance communications between individuals</h6>

            <h6>推廣臺灣文化和促進其他文化與會員的交流 Promote Taiwanese culture</h6>

            <h6>提供會員額外的學術活動 Provide Extracurricular Activities Opportunities</h6>

            <h6>保持政治和宗教中立 Remain neutral in political and religious views</h6>

            <h6>不營利、自動自發 Achiving a non-profit and self-motivated organization</h6>
          </div>
        </Collapisble>
      </div>
    );
  }
}

export default Work;
