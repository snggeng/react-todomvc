import React, {Component, PropTypes} from 'react'
import { Button, Card, Row, Col, Input } from 'react-materialize'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='search-bar'>
        <Row>
          <Col m={3} l={4} />
          <Input s={12} m={6} l={4} label='Search' validate />
        </Row>
      </div>
    )
  }
}

SearchBar.propTypes = {

}
