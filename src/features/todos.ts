import axios from 'axios';
import { Dispatch } from 'redux';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: TodoTypes.fetchTodos;
  payload: Todo[]
}

enum TodoTypes {
  fetchTodos
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Todo[]>(url);

  dispatch<FetchTodosAction>({
    type: TodoTypes.fetchTodos,
    payload: res.data
  });
};