import React from 'react';
import img from './assets/background.JPG';
import styled from 'styled-components';

const AppStyles = styled.div`
  background-image: url(${img});
  height: 1200px;
`;

function App() {
  return (
    <AppStyles>
      <div class="hello">
        Hello,
      </div>
      <div>
        I'm Nate.
      </div>
      <button>
        Click Me
      </button>
    </AppStyles>
  );
}

export default App;