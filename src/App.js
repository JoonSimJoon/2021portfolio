import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <ReactFullpage

    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    scrollHorizontally = {true}  /* Because we are using the extension */
    scrollHorizontallyKey = {'YOUR KEY HERE'}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  );
}

export default App;
