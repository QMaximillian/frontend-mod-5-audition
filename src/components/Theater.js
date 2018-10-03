import React, { Component } from 'react'
import Season from './Season'
import Audition from './Audition'


export default class Theater extends Component {

  state = {
    clicked: false
  }

  mappedSeasons = () => {
    return this.props.theater.attributes.seasons.map(season => {
      return <Season season={season}/>
    })
  }

  mappedAuditions = () => {
    return this.props.theater.attributes.get_auditions.map(audition => {
      return <Audition
        parent="Theater"
        audition={audition}
      />
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
            <div>Seasons</div>
            <div>
            {this.mappedSeasons()}
          </div>
          </div>
          <div>

          </div>
          <div>
            <div>Auditions</div>
            <div style={{float: "left", marginTop: '50px'}}>
              {this.mappedAuditions()}
            </div>
          </div>
        </div> : <div></div>}

        </div>
     )
   }
 };
