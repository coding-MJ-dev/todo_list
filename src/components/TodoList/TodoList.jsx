import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '123', text: 'shopping', status: 'active'},
    {id: '123', text: 'studying', status: 'active'}
  ]);


  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))
        }
      </ul>
    </section>
  );
}

