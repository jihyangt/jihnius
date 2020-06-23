import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from "styled-components";
import HomeMain from './homemain';
import AboutMain from './aboutmain';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Main = () => (
    <Wrapper>
    <Route render={({location}) => (
        <TransitionGroup>
            <CSSTransition 
            key={location.pathname}
            timeout={{ enter: 1000, exit: 1000 }}
            classNames="fade"
            >
            <Switch location={location}>
                <Route exact path="/" component={HomeMain} />
                <Route path="/about" component={AboutMain} />
            </Switch>
            </CSSTransition>
        </TransitionGroup>
        )
    }/>
    </Wrapper>
);

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 1000ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 1000ms ease-in;
    }
`;

export default Main;
