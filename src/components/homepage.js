import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage container">
        <div className="homepage-banner row">
          <div className="homepage-column container">
            <div className="homepage-info">
              <h4>Hey, I'm</h4>
              <h1 style={{marginLeft: '20px'}}>Jih-Yang Tan</h1>
              <br></br>
              <h3 style={{marginBottom: '-20px'}}><strong>Data</strong></h3>
              <h3 style={{marginBottom: '-20px'}}><strong>Driven</strong></h3>
              <h3 style={{marginBottom: '0px'}}>Marketer</h3>
            </div>
            <div className="homepage-img"> 
              
            </div>
          </div>
        </div>   
      </div>
    );
  }
}

