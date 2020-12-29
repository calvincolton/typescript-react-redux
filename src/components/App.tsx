import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../features/todos';
import { StoreState } from '../features';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }
  
  render() {
    return (
      <div>Aye Matey!</div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export default connect(mapStateToProps, { fetchTodos })(App);
