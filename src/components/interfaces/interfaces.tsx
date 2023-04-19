export interface todo {
  title: string;
  status: string;
  id: string;
}

export interface listTodoProps {
  todos: todo[];
  toggleTodo: Function;
  deleteTodo: Function;
}

export interface listItemProps {
  todo: todo;
  toggleTodo: Function;
  deleteTodo: Function;
}

export interface NewTodoFormProps {
  addTodo: Function;
}
