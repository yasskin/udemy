import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  count = (num) => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter + num,
      });
    }
  };

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
          {this.state.counter === 0 && <h2>The counter cannot go below 0</h2>}
        </h1>
        <button data-test='increment-button' onClick={() => this.count(1)}>
          Increment counter
        </button>
        <button data-test='decrement-button' onClick={() => this.count(-1)}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
