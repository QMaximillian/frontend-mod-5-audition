import React, { Component } from 'react'
import { loadSeason } from '../actions/actions'
import { connect } from 'react-redux'
import PlayTab from './PlayTab'
import { Loader } from 'semantic-ui-react'

class SeasonShow extends Component {


  state = {
    clicked: false
  }

  componentDidMount(){
    this.props.loadSeason(this.props.match.params.seasonId)
  }


  mappedShows = () => {
    return this.props.season.attributes.shows.map(show => {
      return <PlayTab match={this.props.match} show={show}/>
    })
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    })
  }


   render() {
     if (this.props.season.attributes) {
       return (
          <div onClick={this.handleClick} className="card">
            {this.props.season.attributes.season_name}
            {this.props.season.attributes.year}
            {this.props.season.attributes.season_description}
            {this.state.clicked ?
              <div className="card-container">{this.mappedShows()}</div>
               : <div></div>}
          </div>
       )
     } else {
       return (
         <Loader />
       )
     }
   }
 }

 export default connect(state => ({ season: state.season }), { loadSeason })(SeasonShow)
