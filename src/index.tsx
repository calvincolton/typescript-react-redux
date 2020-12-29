import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/App';
import { reducers } from './features';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// interface AppProps {
//   color?: string;
// }

// interface AppState {
//   counter: number;
// }

// class App extends Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   onIncrement = (): void => {
//     this.setState(prevState => ({ counter: prevState.counter + 1 }));
//     // this.setState({ counter: this.state.counter + 1 });
//   }

//   onDecrement = (): void => {
//     this.setState(prevState => ({ counter: prevState.counter - 1 }));
//     // this.setState({ counter: this.state.counter - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onIncrement}>Increment</button>
//         <button onClick={this.onDecrement}>Decrement</button>
//         {this.state.counter}
//       </div>
//     );
//   }
// }

// const App = (props: AppProps): JSX.Element => {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCounter(counter+1)}>Increment</button>
//       <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//       {counter}
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.querySelector('#root'));