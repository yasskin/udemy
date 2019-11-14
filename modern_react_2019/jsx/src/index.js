// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component
const App = () => {
  const buttonText = { text: 'Click me' };
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className='label' htmlFor='name'>
        Enter name:
      </label>
      <input id='name' type='text' />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
