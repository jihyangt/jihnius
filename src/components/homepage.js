import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage container">
        <div className="homepage-banner row">
          <div className="homepage-column container">
            <div className="homepage-info">
              <h4>Hi, I'm</h4>
              <h1 style={{marginLeft: '20px'}}>Jih-Yang Tan</h1>
              <br></br>
              {/* <div className='homepage-desc'> */}
              <h3 style={{fontWeight: 'bold'}}>Results</h3>
              <h3 style={{fontWeight: 'bold'}}>Driven</h3>
              <h3>Marketer</h3>
              {/* </div> */}
            </div>
            <div className="homepage-img shadow"> 
              <img className='pp-home' src={require('../assets/homep.png')}></img>
            </div>
          </div>
        </div>   
      </div>
    );
  }
}

