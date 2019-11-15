import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // special function particular to JavaScript
  constructor(props) {
    // super is a reference to the parent's constructor function
    super(props);

    // the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: '' };

    // Geolocation function takes some time
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      position => {
        console.log(position);
        // call setState a method in React.Component
        this.setState({ lat: position.coords.latitude });
      },
      // failure callback
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // react says we have to define render
  render() {
    // conditional rendering
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitute: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
