import React from 'react';
import AppContext from './context';
import MenuBar from './components/MenuBar/MenuBar/MenuBar';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import Desktop from './components/Desktop/Desktop';

import pc from './assets/img/komputer.png';
import bin from './assets/img/kosz.png';
import IE from './assets/img/IE.png';
import paint from './assets/img/paint.png';

class App extends React.Component {
  state = {
    scale: 0,
    scale2ndBar: 0,
    Data: [
      {
        key: 0,
        content: 'Komputer',
        src: pc,
        active: 1,
      },
      {
        key: 1,
        content: 'Kosz',
        src: bin,
        active: 1,
      },
      {
        key: 2,
        content: 'Paint',
        src: paint,
        active: 1,
      },
      {
        key: 3,
        content: 'Internet Explorer',
        src: IE,
        active: 1,
      },
    ],
    activePrograms: [],
  };

  deactivateMenuBarIcon = () => {
    const { activePrograms } = this.state;
    activePrograms.forEach(program => {
      program.active = 0;
    });
  };

  startBarFn = () => {
    this.deactivateMenuBarIcon();

    const { scale } = this.state;

    if (scale === 0) this.setState({ scale: 1 });
    else if (scale === 1) this.setState({ scale: 0, scale2ndBar: 0 });
  };

  startBarFn2 = () => {
    const { scale2ndBar } = this.state;
    if (scale2ndBar === 0) this.setState({ scale2ndBar: 1 });
    else if (scale2ndBar === 1) this.setState({ scale2ndBar: 0 });
  };

  closeBarFn = () => {
    this.deactivateMenuBarIcon();

    this.setState({
      scale: 0,
      scale2ndBar: 0,
    });
  };

  closeMoreFn = () => {
    this.setState({
      scale2ndBar: 0,
    });
  };

  openProgram = id => {
    const { Data, activePrograms } = this.state;

    this.deactivateMenuBarIcon();

    if (activePrograms.includes(Data[id]) === false) {
      this.setState(prevState => ({
        activePrograms: [...prevState.activePrograms, Data[id]],
      }));
    }
  };

  closeProgram = key => {
    const { activePrograms } = this.state;
    const activeProgramsArray = [...activePrograms];
    const index = activeProgramsArray.findIndex(program => program.key === key);
    activeProgramsArray.splice(index, 1);

    this.setState({
      activePrograms: activeProgramsArray,
    });
  };

  render() {
    const { activePrograms, Data } = this.state;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          startBarFn: this.startBarFn,
          startBarFn2: this.startBarFn2,
          closeMoreFn: this.closeMoreFn,
        }}
      >
        <div className="App">
          <GlobalStyle />
          <MenuBar data={activePrograms} />
          <GlobalStyle />
          <Desktop
            clickFn={this.closeBarFn}
            data={Data}
            openProgramFn={this.openProgram}
            closeProgramFn={this.closeProgram}
            activePrograms={activePrograms}
          />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
