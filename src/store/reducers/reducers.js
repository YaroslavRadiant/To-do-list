import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  'todos': [
    { 'id': 1, 'text': 'first', 'isDone': false },
    { 'id': 2, 'text': 'second', 'isDone': false },
    { 'id': 3, 'text': 'third', 'isDone': false },
  ],
}

const todosSlice = createSlice({
  'name': 'todos',
  initialState,
  'reducers': {
    'addTodo': (state, action) => {
      state.todos.push(action.payload)
    },
    'toggleTodo': (state, action) => {
      const currentTodo = state.todos.find((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.isDone = !currentTodo.isDone
      }
    },
    'deleteTodo': (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
