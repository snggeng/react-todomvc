import React, {Component, PropTypes} from 'react'
import { Card, Button, Row, Col, Input } from 'react-materialize'

// Import Components
import SearchBar from '../SearchBar/SearchBar'

class DeleteTasks extends Component {
  render() {
    return (
      <Button onClick={this.props.deleteCompleted}>Delete Completed</Button>
    )
  }
}

class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      completed: this.props.completed,
      task: this.props.task,
      id: this.props.id
    }
  }

  render () {
    return (
      <div className='TodoItem'>
        <Row>
          <Col s={12} m={6} l={4} offset='m3 l4' className='item-col'>
            <Card>{this.props.task}</Card>
            <Input name='group1'
                   id={this.props.task}
                   type='checkbox'
                   value='done'
                   label='Done'
                   className='filled-in'
                   onClick={this.props.selected} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default class TodoContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: this.props.tasks,
      query: ''
    }
  }
  selected = (e) => {
    console.log('selected')
    //let task = e.target.parentNode.previousSibling.getElementsByClassName('card-content')[0].innerText
    console.log('before', this.state)
    let selectedTasks = this.props.tasks
    selectedTasks.forEach((el, index) => {
      console.log('looping')
      console.log('el', el.task)
      if (el.task === e.target.id) {
        console.log('true')
        el.completed = true
      }
    })
    this.setState({
      tasks: selectedTasks
    }, () => {
      console.log('after', this.state)
    })

  }

  createTodos = () => {

    let taskItems = [];

    this.props.tasks.forEach((task, index) => {
      taskItems.push(<TodoItem task={task.task}
                               completed={task.completed}
                               selected={this.selected}
                               id={task.id}
                               key={task.id} />)
    })

  return taskItems;
  }

  onChange = (e) => {
    let originalState = this.props.tasks
    let state = this.state
    let filteredTasks
    let queryText = e.target.value
    // If user is searching, filter
    if (queryText !== '') {
      filteredTasks = this.state.tasks.filter((el) => {
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
    let todos = this.createTodos();
    return (
      <div className='TodoContent'>
        <SearchBar tasks={this.state.tasks} onChange={this.onChange}/>
        {todos}
        {this.state.tasks.length > 0 &&
          <DeleteTasks deleteCompleted={this.props.deleteCompleted} />
        }
      </div>
    )
  }
}

TodoContent.propTypes = {
  tasks: PropTypes.array.isRequired
}
