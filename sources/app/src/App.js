import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    fetch('/api/hello.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo} 
            className="App-logo" 
            alt="logo" />
          { 
            /* Note the component & ice paths don't really exist.
             * Please replace with actual paths if you want "in context editing". */
          }
          <div
            className="result"
            data-studio-ice
            data-studio-ice-path="/site/sample/component.xml"
            data-studio-component="/component/sample"
            data-studio-component-path="/site/sample/component.xml">
            {this.state ? this.state.data : '(loading...)'}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
