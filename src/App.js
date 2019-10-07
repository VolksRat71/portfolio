import React from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

import {
  Layout,
  Navigation,
  Drawer,
  Content,
} from 'react-mdl';

function App() {
  return (
    <div>
      <Layout fixedDrawer>
        <Drawer title="Nathaniel Ryan">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
