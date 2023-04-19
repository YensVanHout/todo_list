import { listItemProps as props } from "../interfaces/interfaces";

const ListItem = ({ todo, toggleTodo, deleteTodo }: props) => {
  return (
    <li>
      <div className="card">
        <h3>{todo.title}</h3>
        <div className="status">
          {todo.status === "new" ? (
            <button
              className="btn btn-sucess mb"
              onClick={(e) => toggleTodo(todo.id, "completed")}
            >
              Complete
            </button>
          ) : (
            <h4 className="css-fix">{todo.status}</h4>
          )}
          <button
            className={`${
              todo.status === "new" ? "btn btn-danger mb" : "btn btn-sucess mb"
            }`}
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
