import { useEffect, useState } from "react";
import "./App.css";
import NewTodoForm from "../newTodoForm/NewTodoForm";
import { todo } from "../interfaces/interfaces";
import List from "../list/List";

const App = () => {
  const [todos, setTodos] = useState<todo[]>(() => {
    const localValue = localStorage.getItem("TODOS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  const [toComplete, setToComplete] = useState<Number>()

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
    setToComplete(todos.filter(todo => todo.status === "new").length)
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, status: "new" },
      ];
    });
  };

  const toggleTodo = (id: string, status: string) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        let dateCompleted = new Date().toLocaleString("en-GB") + "";
        return todo.id === id ? { ...todo, status: `Completed\nat\n${dateCompleted}` } : todo;
      });
    });
  };

  const deleteTodo = (id: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="app">
      <h1 className="header">Add new todo</h1>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <h2 className="header">Todo Count {`${toComplete}/${todos.length}`}</h2>
      <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
