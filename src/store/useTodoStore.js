import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (text) => {
        const newTodo = {
          id: crypto.randomUUID(),
          text,
          isCompleted: false
        };

        set((state) => ({
          todos: [...state.todos, newTodo]
        }));
      },

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  isCompleted: !todo.isCompleted
                }
              : todo
          )
        }));
      },

      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter(
            (todo) => todo.id !== id
          )
        }));
      }
    }),
    {
      name: 'todo-storage'
    }
  )
);
