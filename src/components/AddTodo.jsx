import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/reducers/reducers'

import { Box, Button, TextField } from '@mui/material'

const AddTodo = memo(() => {
  const dispatch = useDispatch()
  const [todoInput, setTodoInput] = useState('')

  const handleAddTodo = () => {
    if (todoInput.trim() !== '' && todoInput.trim().length < 25) {
      dispatch(
        addTodo({
          'id': Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
          'text': todoInput,
          'isDone': false,
        }),
      )
      setTodoInput('')
    }
  }

  return (
    <Box sx={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
      <TextField
        sx={{ 'width': '100%', 'marginRight': '20px' }}
        label='Add Todo'
        variant='outlined'
        size='small'
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <Button
        variant='contained'
        onClick={handleAddTodo}
        sx={{ 'marginRight': '10px' }}
      >
        Add
      </Button>
    </Box>
  )
})

export default AddTodo
