import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, Card, Row, Col, Input } from 'react-materialize'

import SearchBar from '../SearchBar/SearchBar'
import TodoContent from '../TodoContent/TodoContent'

class CreateTask extends Component {
  render () {
    return (
      <div className='CreateTask'>
        <Row>
          <Col m={3} l={4} />
          <Input s={12} m={6} l={4} label='Create New Task' validate />
        </Row>
        <Button>Add</Button>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>My Todo List</h2>
        </div>
        <SearchBar />
        <TodoContent />
        <CreateTask />
      </div>
    )
  }
}

export default App
