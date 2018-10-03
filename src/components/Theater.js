import React, { Component } from 'react'
import Season from './Season'
import Audition from './Audition'
import PlayTab from './PlayTab'
import '../Audition.css'


export default class Theater extends Component {

  state = {
    clicked: false
  }

  mappedSeasons = () => {
    return this.props.theater.attributes.seasons.map(season => {
      return <Season season={season}/>
    })
  }

  mappedShows = () => {
    return this.props.theater.attributes.get_shows.map(show => {
      return <PlayTab theaterId={parseInt(this.props.theater.id)} seasonId={this.props.theater.attributes.seasons[0].id} parent="Theater" show={show} />
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
     console.log(this.props)
     console.log(parseInt(this.props.theater.id))
     console.log(this.props.theater.attributes.seasons[0].id)
     return (
        <div
          className="card"
          onClick={this.handleClick}
          style={{marginBottom: "10px"}}>
            <img className="theater-logo" src={this.props.theater.attributes.img_link}/>
            {this.state.clicked ?
              <div>
              <div className="grid-fourth">
                <label>About Us</label>
              </div>

            <div className="flex-grid">
            <div className="grid-fourth" style={{alignItems: "center"}}>{this.props.theater.attributes.theater_name}</div>
            <div className="grid-fourth"> {this.props.theater.attributes.theater_location}</div>

            <div className="grid-fourth">{this.props.theater.attributes.theater_information}</div>
            <div className="grid-fourth">{this.props.theater.attributes.theater_mission}</div>

          </div>
          {/* <div className="theater-links">
            <div className="theater-button">
              <button>Link</button>
            </div>
            <div className="theater-button">
              <button>Link</button>
            </div>
          </div> */}
          <div>
            <h1>Seasons</h1>
              <div className="season-tab-container">
                {this.mappedSeasons()}
              </div>
          </div>

          <div>
            <h1>Shows</h1>
            <div className="show-tab-container">
              {this.mappedShows()}
            </div>
          </div>
        </div> : <div></div>}

        </div>
     )
   }
 };
