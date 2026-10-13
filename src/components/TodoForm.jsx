import { useState } from 'react';
import { useTodoStore } from '../store/useTodoStore';

function TodoForm() {
  const [text, setText] = useState('');

  const addTodo = useTodoStore(
    (state) => state.addTodo
  );

  function handleSubmit(event) {
    event.preventDefault();

    const inputText = text.trim();

    if (inputText === '') {
      return;
    }

    addTodo(inputText);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
        placeholder="Add a new task.."
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
