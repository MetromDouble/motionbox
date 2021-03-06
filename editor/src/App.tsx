import React, { Component } from 'react';
import GLView from './components/GLView';
import Panel from './components/Panel';
import TapeMenu from './components/TapeMenu';

interface IAppProps {
}
interface IAppState {
}

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <>
        <TapeMenu />
        <div style={{ display: 'flex' }}>
          <div style={{ flexBasis: '1000px', height: '700px' }}>
            <GLView />
          </div>
          <div style={{ flexBasis: 'calc(100vw - 1000px)', height: '700px' }}>
            <Panel />
          </div>
        </div>
      </>
    );
  }
}

export default App;
