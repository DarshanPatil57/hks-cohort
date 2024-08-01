import React from "react";

const Todo = ({ todos }) => {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.title}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button>{todo.completed === true ? "Completed" : "Mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
