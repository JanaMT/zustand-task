import { useTodoStore } from './store/useTodoStore';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const todos = useTodoStore(
    (state) => state.todos
  );

  return (
    <main>
      <h1>Todo App</h1>

      <TodoForm />

      <TodoList />
    </main>
  );
}

export default App;
