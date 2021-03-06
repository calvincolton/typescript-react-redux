import axios from 'axios';
import { Dispatch } from 'redux';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface FetchTodosAction {
  type: TodoTypes.fetchTodos;
  payload: Todo[];
}

interface PostTodoAction {
  type: TodoTypes.postTodo;
  payload: Todo;
}

interface DeleteTodoAction {
  type: TodoTypes.deleteTodo;
  payload: number;
}

type TodoAction = FetchTodosAction | PostTodoAction | DeleteTodoAction;

enum TodoTypes {
  fetchTodos,
  postTodo,
  deleteTodo
}

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch(action.type) {
    case TodoTypes.fetchTodos:
      return action.payload;
    case TodoTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => async (dispatch: Dispatch) => {
  const res = await axios.get<Todo[]>(url);

  dispatch<FetchTodosAction>({
    type: TodoTypes.fetchTodos,
    payload: res.data
  });
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: TodoTypes.deleteTodo,
    payload: id
  }
}