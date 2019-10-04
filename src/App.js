import React from 'react';
import img from './assets/background.JPG';
import styled from 'styled-components';

const AppStyles = styled.div`
  background-image: url(${img});
  height: 2000px;
`;

function App() {
  return (
    <AppStyles>
      <div class="veiwport">
        hey
      </div>
    </AppStyles>
  );
}

export default App;