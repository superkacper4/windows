import React from 'react';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import Desktop from './components/Desktop/Desktop';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Desktop />
      </div>
    );
  }
}

export default App;
