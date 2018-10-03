import React, { Component } from 'react'
import { loadSeason } from '../actions/actions'
import { fetchSeasons } from '../adapters/actorAdapter'
import { connect } from 'react-redux'
import Audition from './Audition'
import { Loader } from 'semantic-ui-react'

class SeasonShow extends Component {


  state = {
    clicked: false
  }

  componentDidMount(){
    this.props.loadSeason(this.props.match.params.seasonId)
  }


  mappedAuditions = () => {
    return this.props.season.attributes.auditions.map(audition => {
      return <Audition match={this.props.match} parent="Season" audition={audition}/>
    })
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    }, () => console.log("Clicked"))
  }


   render() {
     console.log(this.props)
     if (this.props.season.attributes) {
       return (
          <div onClick={this.handleClick} className="card">
            {this.props.season.attributes.season_name}
            {this.props.season.attributes.year}
            {this.props.season.attributes.season_description}
            {this.state.clicked ? <div className="card-container">{this.mappedAuditions()}</div> : <div></div>}
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
