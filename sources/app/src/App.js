import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('http://127.0.0.1:8080/api/hello.json', { credentials: 'include', mode: 'cors' })
      .then((response) => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="result">{this.state && this.state.data}</div>
        </header>
      </div>
    );
  }
}

export default App;
