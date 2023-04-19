import { listTodoProps as props } from "../interfaces/interfaces";
import ListItem from "../listItem/ListItem";


const List = ({ todos, toggleTodo, deleteTodo }: props) => {

  return (
    <div className="list">
        {todos.length === 0 && "No todos yet"}
        {todos.map((todo) => {
          return (
              <ListItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
          );
        })}
    </div>
  );
};

export default List;
