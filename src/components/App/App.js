import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import uuidv4 from 'uuid/v4'
import { Button, Row, Col, Input } from 'react-materialize'

// Import Components
import TodoContent from '../TodoContent/TodoContent'

class CreateTask extends Component {

  constructor(props) {
    super(props)

    this.state = {
      task: '',
      id: uuidv4()
    }
  }

  onClick = (e) => {
    // create new Task Item, passing in the App's state
    this.props.createTask(this.state)

    this.setState({
      task: '',
      id: uuidv4()
    })
  }

  onChange = (e) => {
    // Update state when input is entered
    let state = this.state
    state.task = e.target.value

    this.setState(state)
  }

  render () {
    return (
      <div className='CreateTask'>
        <Row>
          <Col m={3} l={4} />
          <Input s={12} m={6} l={4} label='Create New Task' onChange={this.onChange} value={this.state.task}/>
        </Row>
        <Button onClick={this.onClick}>Add</Button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      unfilteredtasks: []
    }
  }

  createTask = (task) => {
    let newTask = {}
    newTask.task = task.task
    newTask.id = uuidv4()
    newTask.completed = false
    newTask.isChecked = ''

    let tasks = this.state.tasks
    tasks.push(newTask)
    let unfilteredtasks = this.state.unfilteredtasks
    unfilteredtasks.push(newTask)

    this.setState({
      tasks: tasks,
      unfilteredtasks: unfilteredtasks
    });

  }

  deleteCompleted = (e) => {
    let remainingTasks
    remainingTasks = this.state.tasks.filter((el) => {
      return el.completed === false
    })
    this.setState({
      tasks: remainingTasks,
      unfilteredtasks: remainingTasks
    })
  }

  onChange = (e) => {
    let originalState = this.state.unfilteredtasks
    let state = this.state
    let filteredTasks
    let queryText = e.target.value
    console.log(queryText)
    // If user is searching, filter
    if (queryText !== '') {
      filteredTasks = this.state.tasks.filter((el) => {
        console.log(el.task)
        return el.task.includes(queryText)
      })
    } else {
      // else, return back to original state
      filteredTasks = originalState
    }

    state.query = queryText
    state.tasks = filteredTasks
    this.setState(state)
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>My Todo List</h2>
        </div>
        <TodoContent tasks={this.state.tasks} unfilteredtasks={this.state.unfilteredtasks} deleteCompleted={this.deleteCompleted} handleSearch={this.onChange} />
        <CreateTask createTask={this.createTask} />
      </div>
    )
  }
}

export default App
