import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../store/reducers/reducers'

import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

const ToDoItem = memo(({ todo }) => {
  const dispatch = useDispatch()

  return (
    <ListItem
      sx={{
        'backgroundColor': '#1976D2',
        'borderRadius': '10px',
        'width': '100%',
      }}
    >
      <ListItemText
        primary={todo.text}
        sx={{
          'fontSize': '20px',
          'textDecoration': `${todo.isDone ? 'line-through' : 'none'}`,
          'color': '#fff',
          'cursor': 'pointer',
        }}
        onClick={() => dispatch(toggleTodo(todo.id))}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge='end'
          aria-label='delete'
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <DeleteIcon color='action' />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
})

export default ToDoItem
