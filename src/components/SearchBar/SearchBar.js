import React, {Component, PropTypes} from 'react'
import { Row, Col, Input } from 'react-materialize'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tasks: this.props.tasks,
      query: ''
    }
  }

  onChange = (e) => {
    let state = this.state
    state.query = e.target.value

    this.setState(state)
  }

  render () {
    return (
      <div className='search-bar'>
        <Row>
          <Col m={3} l={4} />
          <Input s={12} m={6} l={4} label='Search' validate onChange={this.onChange} />
        </Row>
      </div>
    )
  }
}

SearchBar.propTypes = {

}
