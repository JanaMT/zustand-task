import { useTodoStore } from '../store/useTodoStore';

function TodoList() {
  const todos = useTodoStore(
    (state) => state.todos
  );

  const toggleTodo = useTodoStore(
    (state) => state.toggleTodo
  );

  const deleteTodo = useTodoStore(
    (state) => state.deleteTodo
  );

  if (todos.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={
            todo.isCompleted ? 'completed' : ''
          }
        >
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            <span>{todo.text}</span>
          </label>

          <button
            type="button"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
