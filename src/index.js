import React, { Component } from 'react';
import { render } from 'react-dom';
import Editor from './Editor';
import './style.css';

class App extends Component {
  render() {
    return (
        <Editor />
    );
  }
}

render(<App />, document.getElementById('root'));
