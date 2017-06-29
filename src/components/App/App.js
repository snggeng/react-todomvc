import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import uuidv4 from 'uuid/v4'
import { Button, Row, Col, Input } from 'react-materialize'

import SearchBar from '../SearchBar/SearchBar'
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
    console.log(e.target)
    this.props.createTask(this.state)

    this.setState({
      task: '',
      id: uuidv4()
    })
  }

  onChange = (e) => {
  let state = this.state
  state.task = e.target.value

  this.setState(state)
}

  render () {
    return (
      <div className='CreateTask'>
        <Row>
          <Col m={3} l={4} />
          <Input s={12} m={6} l={4} label='Create New Task' onChange={this.onChange} />
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
      tasks: []
    }
  }

  createTask = (task) => {
    console.log(task)
    let newTask = {};
    newTask.task = task.task;
    newTask.id = uuidv4();

    let tasks = this.state.tasks;
    tasks.push(newTask);

    console.log(tasks)

    this.setState({
      tasks: tasks
    });

  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>My Todo List</h2>
        </div>
        <SearchBar tasks={this.state.tasks} />
        <TodoContent tasks={this.state.tasks} />
        <CreateTask createTask={this.createTask} />
      </div>
    )
  }
}

export default App
