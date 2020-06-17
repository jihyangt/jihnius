import React, { useState } from 'react';
import './App.css';

import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function App() {

  return (
    <div className="App" className="light-mode">
      <Layout className="light-mode">
        <Header id="header-bar" className="light-mode" title=" " scroll>
          <Navigation className="light-mode">
            <NavLink to="/" activeStyle={{ fontWeight: "bold" }}><p>Home</p></NavLink>
            <NavLink to="/work" activeStyle={{ fontWeight: "bold"}}><p>Work</p></NavLink>
            <NavLink to="/" activeStyle={{ fontWeight: "bold"}}></NavLink>
          </Navigation>
        </Header>
        <Drawer title="JIH-NIUS" id="header-bar">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      </Layout>
    </div>
  )
}

