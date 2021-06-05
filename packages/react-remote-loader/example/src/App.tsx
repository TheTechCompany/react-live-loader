import React from 'react';
import logo from './logo.svg';
import { RemoteComponent } from '../../'
import './App.css';

function App() {
  return (
    <div className="App">
      <RemoteComponent url="https://github.com" />
    </div>
  );
}

export default App;
