import React, { Component } from "react";
import logo from "../logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: false,
      workpage: false,
      aboutpage: false,
      width: 0, height: 0
    };
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  clickHome = (e) => {
    console.log('home')
    this.setState({homepage: true, aboutpage: false})
  }

  clickWork = (e) => {
    console.log('work')
    // if(this.state.aboutpage === true){
    //   window.location.hash = '#work';
    // }
    this.setState({workpage: true, aboutpage: false})
    // document.getElementById('work').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  clickAbout = (e) => {
    console.log('abt')
    this.setState({homepage: false, workpage: false, aboutpage: true})
  }
  
  componentDidMount = ()=> {
    const location = window.location.href.split('/')
    if(location[location.length - 1] === ''){
      this.setState({homepage: true})
    } else if(location[location.length - 1] === 'about'){
      this.setState({aboutpage: true})
    } else (
      this.setState({homepage: true})
    )

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {/* <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          /> */}
          <ul className="nav-items">
            <li className="nav-item" onClick={this.clickHome}>
              { this.state.aboutpage ? 
              (<NavLink
                to="/"
                offset={-70}
                duration={500}
                className="navigation"
              >
                Home
              </NavLink>) : (<Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navigation"
              >
                Home
              </Link>)
              }
            </li>
            <li className="nav-item" onClick={this.clickWork}>
              { this.state.aboutpage ? 
              (<NavLink
                to={{
                  pathname: "/",
                  state: {
                    fromAbout: true
                  }
                }}
                offset={-70}
                duration={500}
                className="navigation"
              >
                Work
              </NavLink>) : 
              (<Link
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="navigation"
              >
                Work
              </Link>) }
            </li>
            <li className="nav-item" onClick={this.clickAbout}>
              <NavLink
                to="/about"
                offset={-70}
                duration={500}
                className="navigation"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        {/* {this.state.width < 768 && (
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav-mobile navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </div>
        </nav>
        )} */}
      </nav>
    );
  }
}