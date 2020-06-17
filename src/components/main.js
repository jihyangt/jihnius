import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Work from './work';
import Contact from './contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Main = () => (
  <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition 
          key={location.pathname}
          timeout={500}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }/>
);
export default Main;
