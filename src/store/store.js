import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/reducers'

const store = configureStore({
  'reducer': {
    'todos': todosReducer,
  },
})

export default store
