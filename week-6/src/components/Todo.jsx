import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Go to gym", description: "7 to 9" },
    { id: 2, title: "Study", description: "10 to 12" },
    { id: 3, title: "Sports", description: "4 to 5" }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const addTodo = () => {
    if (newTitle && newDescription) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: newTitle,
          description: newDescription
        }
      ]);
      setNewTitle('');
      setNewDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder='Title'
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder='Description'
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <br />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map(todo => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Todo;
