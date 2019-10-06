import React from 'react';
import './App.css';

import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';

function App() {
  return (
    <div>
      <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Nathaniel </span><strong>Ryan</strong></span>}>
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
            <a href="/">Link</a>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
}

export default App;
