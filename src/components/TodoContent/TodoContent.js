import React, {Component, PropTypes} from 'react'
import { Card, Row, Col, Input } from 'react-materialize'

class TodoItem extends Component {
  render () {
    return (
      <div className='TodoItem'>
        <Row>
          <Col s={12} m={6} l={4} offset='m3 l4' className='item-col'>
            <Card>{this.props.task}</Card>
            <Input name='group1' type='checkbox' value='done' label='Done' className='filled-in' />
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
      tasks: this.props.tasks
    }
  }

  createTodos = () => {

    let taskItems = [];

    this.state.tasks.forEach((task, index) => {
      taskItems.push(<TodoItem   task={task.task}
                                   id={task.id}
                                   key={task.id} />)
    });

  return taskItems;
  }

  render () {
    let todos = this.createTodos();
    return (
      <div className='TodoContent'>
        {todos}
      </div>
    )
  }
}

TodoContent.propTypes = {
  tasks: PropTypes.array.isRequired
}
