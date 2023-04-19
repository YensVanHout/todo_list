import { useState } from "react";
import { NewTodoFormProps as props } from "../interfaces/interfaces";

const NewTodoForm = ({ addTodo }: props) => {
  const [newItem, setNewItem] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    newItem !== "" ? addTodo(newItem) : null;

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="form-row">
        <p>New Item:</p>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default NewTodoForm;
