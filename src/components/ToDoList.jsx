import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import AddTodo from './AddTodo'
import ToDoItem from './ToDoItem'

import {
  List,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Stack,
} from '@mui/material'

const OVERFLOW_STYLE = {
  '&::-webkit-scrollbar': {
    'width': '10px',
    'marginLeft': '40px',
  },
  '&::-webkit-scrollbar-track': {
    'color': 'red',
  },
  '&::-webkit-scrollbar-thumb': {
    'borderRadius': '6px',
    'background': '#1976D2',
  },
}

function ToDoList() {
  const [filteredStatus, setFilteredStatus] = useState('all')
  const todos = useSelector((state) => state.todos.todos)

  const filteredToDos = () => {
    if (filteredStatus === 'completed') return todos.filter((el) => el.isDone)
    if (filteredStatus === 'current') return todos.filter((el) => !el.isDone)
    return todos
  }

  const calculateCompletedCount = useCallback(() => {
    let doneCount = 0
    let notDoneCount = 0

    for (const el of todos) {
      if (el.isDone) {
        doneCount += 1
      } else {
        notDoneCount += 1
      }
    }

    return [doneCount, notDoneCount]
  }, [todos])

  return (
    <Container
      maxWidth='sm'
      sx={{
        'marginTop': '40px',
        'background': '#fff',
        'borderRadius': '25px',
        'height': '600px',
        'padding': '20px',
        'boxShadow': ' 10px 13px 39px 0px rgba(0,0,0,0.75)',
      }}
    >
      <AddTodo />

      <Stack direction='row'>
        <RadioGroup
          row
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='all'
          name='radio-buttons-group'
          sx={{
            'justifyContent': 'space-between',
            'width': '80%',
            'paddingY': '10px',
          }}
          value={filteredStatus}
          onChange={(event) => setFilteredStatus(event.target.value)}
        >
          <FormControlLabel value='all' control={<Radio />} label='all' />
          <FormControlLabel
            value='completed'
            control={<Radio />}
            label='completed'
          />
          <FormControlLabel
            value='current'
            control={<Radio />}
            label='current'
          />
        </RadioGroup>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-around'
          sx={{
            'width': '20%',
          }}
        >
          <Typography variant='h4' color='primary'>
            {calculateCompletedCount()[0]}
          </Typography>
          <Typography variant='h4' color='error'>
            {calculateCompletedCount()[1]}
          </Typography>
        </Stack>
      </Stack>

      <List
        sx={{
          'height': '456px',
          'overflow': 'auto',
          'scrollbarWidth': '5px',
          'scrollMarginBottom': '5px',
          'padding': '0px',
          'paddingRight': '10px',
          'display': 'flex',
          'flexDirection': 'column',
          'gap': '20px',
          ...OVERFLOW_STYLE,
        }}
      >
        {filteredToDos().length > 0 ? (
          filteredToDos().map((todo) => <ToDoItem todo={todo} key={todo.id} />)
        ) : (
          <Typography
            color='primary'
            variant='h4' sx={{ 'textAlign': 'center' }}>
            There is no todo
          </Typography>
        )}
      </List>
    </Container>
  )
}

export default ToDoList
