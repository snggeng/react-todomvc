import React, {Component, PropTypes} from 'react'
import { Button, Card, Row, Col, Input } from 'react-materialize'

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
      task: ''
    }
  }

  render () {
    return (
      <div className='TodoContent'>TodoContent Component
        <TodoItem task={this.state.task} />
      </div>
    )
  }
}

TodoContent.propTypes = {
  task: PropTypes.string.isRequired
}
