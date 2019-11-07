import * as React from 'react';

import CounterOutput from './CounterOutput';

// interface IAppProps {}

interface IAppState {
  counterValue: number;
}

class App extends React.Component<{}, IAppState> {
  public state = { counterValue: 0 };

  public render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <CounterOutput counter={this.state.counterValue} />
        <button onClick={this.incHandler}>Increment</button>
        <button onClick={this.decHandler}>Decrement</button>
      </div>
    );
  }

  private incHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + 1 };
    });
  };

  private decHandler = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue - 1 };
    });
  };
}

export default App;
