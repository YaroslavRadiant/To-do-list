import React from 'react'
import ToDoList from './components/ToDoList'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ToDoList />
      </Provider>
    </div>
  )
}

export default App
