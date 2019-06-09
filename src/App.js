import React from 'react';
import AppContext from './context';
import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import GlobalStyle from './GlobalStyle/GlobalStyle';

// const App = () => (

// );

class App extends React.Component {
  state = {
    scale: 0,
    scale2ndBar: 0,
  };

  startBarFn = () => {
    // if (scale === 0) scale = 1;
    // else if (scale === 1) scale = 0;
    const { scale } = this.state;
    // console.log(scale);
    if (scale === 0) this.setState({ scale: 1 });
    else if (scale === 1) this.setState({ scale: 0, scale2ndBar: 0 });
    // this.setState(prevState => ({ scale: !prevState }));
  };

  startBarFn2 = () => {
    //   // if (scale === 0) scale = 1;
    //   // else if (scale === 1) scale = 0;
    const { scale2ndBar } = this.state;
    if (scale2ndBar === 0) this.setState({ scale2ndBar: 1 });
    else if (scale2ndBar === 1) this.setState({ scale2ndBar: 0 });
    //   // this.setState(prevState => ({ scale: !prevState }));
    // };
    // test = scale => {
    //   console.log(scale);
  };

  closeBarFn = () => {
    this.setState({
      scale: 0,
      scale2ndBar: 0,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          startBarFn: this.startBarFn,
          startBarFn2: this.startBarFn2,
        }}
      >
        <div className="App">
          <GlobalStyle />
          <MenuBar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
