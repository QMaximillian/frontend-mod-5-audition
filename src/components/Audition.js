import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'


class Audition extends Component {

   render() {
     switch(this.props.parent) {
      case 'Theater':
        return (
          <Link to={`auditions/${this.props.audition.id}`}>
            <span
              className="card-no-hover">
              {this.props.audition.show_name}
              {this.props.audition.state}
            </span>
          </Link>
        )
      case 'Season': 
        return (
          <Link to={`${this.props.match.params.seasonId}/auditions/${this.props.audition.id}`}>
            <span
              className="card"
              onClick={this.handleClick}>
              {this.props.audition.show_name}
              {this.props.audition.state}
            </span>
          </Link>
        )
      default:
        return (
          <Link to={`/auditions/${this.props.audition.id}`}>
            <Table.Cell>
              {this.props.audition.attributes.show_name}
            </Table.Cell>
            <Table.Cell>
              {this.props.audition.attributes.state}
            </Table.Cell>
            <Table.Cell>
              {this.props.audition.attributes.call_type}
            </Table.Cell>
          </Link>
        )
     }
  }
}

export default connect(state => ({ currentActor: state.currentActor, auditionIndex: state.auditionIndex, tryouts: state.tryouts }))(Audition)
