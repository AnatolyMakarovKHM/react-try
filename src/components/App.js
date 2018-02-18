import React, { Component } from 'react';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CustomForm from './CustomForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row mt-3">
            <div className="col-md-6 offset-md-3">
                <CustomForm/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
