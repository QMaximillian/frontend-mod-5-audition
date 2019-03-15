import React, { Component } from 'react'
import { loadSeason } from '../actions/actions'
import { connect } from 'react-redux'
import PlayTab from './PlayTab'
import { Loader } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

class SeasonShow extends Component {


  state = {
    clicked: true
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
     console.log(this.props.season.attributes)
     if (this.props.season.attributes) {
       return (
          <div onClick={this.handleClick} className="card" style={{fontSize: '2rem', paddingTop: '100px'}}>
            {this.props.season.attributes.season_name}
            {this.props.season.attributes.season_description}
              <div className="card-container">
                {this.mappedShows()}
              </div>
          </div>
       )
     } else {
       return (
         <Loader />
       )
     }
   }
 }

 export default withAuth(connect(state => ({ season: state.season }), { loadSeason })(SeasonShow))
