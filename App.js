import React from 'react';
import { ScreenOrientation } from 'expo';
import io from 'socket.io-client';
import { CONSOLE } from './utils';

import GBA from './components/gba';
import NES from './components/nes';
import SNES from './components/snes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleId: null,
    };
  }

  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  createSocketConnection() {
    const socket = io('http://192.168.0.19:5002/emulation-service');
    socket.on('connected', () => {
      console.log('Connected with server.');
    });
    socket.on('error', data => {
      console.error(data);
    });
    return socket;
  }

  render() {
    switch (this.state.consoleId) {
      case 'gba':
        return <GBA consoleId={CONSOLE.GBA} connection={this.createSocketConnection()} />;
      case 'nes':
        return <NES consoleId={CONSOLE.NES} connection={this.createSocketConnection()} />;
      case 'snes':
        return <SNES consoleId={CONSOLE.SNES} connection={this.createSocketConnection()} />;
      default:
        return <GBA consoleId={CONSOLE.GBA} connection={this.createSocketConnection()}/>;
    }
  }
}
