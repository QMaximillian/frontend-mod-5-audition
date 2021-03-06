import React, { Component } from 'react'
import Season from './Season'
import PlayTab from './PlayTab'
import '../Audition.css'


export default class Theater extends Component {

  // Control whether theater component as been clicked or not
  state = {
    clicked: false
  }

  // Return all seasons related to this theater in a <Season /> component
  mappedSeasons = () => {
    return this.props.theater.attributes.seasons.map(season => {
      return <Season season={season}/>
    })
  }

  // Return all shows related to a season in it's own <PlayTab />
  mappedShows = () => {
    return this.props.theater.attributes.get_shows.map(show => {
      return <PlayTab theaterId={parseInt(this.props.theater.id, 10)} seasonId={this.props.theater.attributes.seasons[0].id} parent="Theater" show={show} />
    })
  }

  // If <Theater /> component is clicked reveal season/show information. If clicked again revert back to not showing season/show information
  handleClick = () => {
    this.setState(prevState => {
      return {
        clicked: !prevState.clicked
      }
    })
  }

   render() {
     return (
        <div
          className="card"
          onClick={this.handleClick}
          style={{marginBottom: "10px"}}>
            <img alt="Logo for theater" className="theater-logo" src={this.props.theater.attributes.img_link}/>
            {this.state.clicked ?
              <div>
                <div className="grid-fourth">
                  <div>
                    <h1 style={{fontSize: '2rem', textDecoration: "underline"}}>Theater</h1>
                    {this.props.theater.attributes.theater_name}
                </div>
              </div>

              <div className="grid-fourth">
                <div>
                  <h1 style={{fontSize: '2rem', textDecoration: "underline"}}>Location</h1>
                    {this.props.theater.attributes.theater_location}
                </div>
              </div>

              <div className="grid-fourth">
                <div>
                  <h1 style={{fontSize: '2rem', textDecoration: "underline"}}>Theater Information</h1>
                    {this.props.theater.attributes.theater_information}
                </div>
              </div>

            <div className="grid-fourth">{this.props.theater.attributes.theater_mission}</div>
              <div>
                <h1>Seasons</h1>
                  <div className="season-tab-container">
                    {this.mappedSeasons()}
                  </div>
              </div><br />

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
 }
