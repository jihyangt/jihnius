import React, { Component } from 'react';

export default class HomePage extends Component {

  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <div className="homepage container">
          <div className="homepage-banner row">
            <div className="homepage-column container">
              <div className="homepage-info">
                <h5>Hey, I'm</h5>
                <h2>Jih-Yang Tan</h2>
                <hr></hr>
                <h5>Lifelong Learner & Tenacious Activator</h5>
                <h5>Market Researcher, Data Analysis, Consumer Segmentation</h5>
                <div id="intro-button-holder" className="d-flex justify-content-around">
                  <div className="">
                    <button type="button" className="btn btn-light intro-button">My Work</button>
                  </div>
                  <div className="">
                    <button type="button" className="btn btn-light intro-button">About Me</button>
                  </div>
                </div>
              </div>
              <div className="homepage-img"> 
                <img className='pp-home' src={require('../assets/XGGL5152.JPG')}></img>
              </div>
            </div>
          </div>   
        </div>
      </div>
    );
  }
}

