//Start creating a comprehensive information page tomorrow

import React, { Component } from 'react'
import { loadAudition, loadTryout } from '../actions/actions'
import { connect } from 'react-redux'
import moment from 'moment'
import { Button } from 'semantic-ui-react'

class TryoutShow extends Component {

  componentDidMount(){
    if (this.props.currentActor.attributes !== undefined) {
      const tryout =  this.props.currentActor.attributes.tryouts.find(tryout => {
          return tryout.id === parseInt(this.props.match.params.id, 10)
        })

      this.props.loadAudition(tryout.audition_id)
      this.props.loadTryout(tryout.id)
    }
  }

    handleLineBreak = (value) => {
      return value.split("\n").map((i,key) => {
              return <div key={key}>{i}</div>;
          })
    }

     render() {
      if (this.props.audition.attributes !== undefined) {
       return (
          <div className="tryout-show-grid profile-card">
            <div style={{textAlign: 'left'}}>
            <h1>
              {this.props.audition.attributes.show_name}
            </h1>
            </div>
            <div>
            <hr/>
            </div>
            <div>
              <h3>
              Location:
              </h3>
              <h4> {this.handleLineBreak(this.props.audition.attributes.location)}</h4>
            </div>
              <h3>
                Audition Time:
              </h3>
              <h4>{moment(this.props.tryout.audition_time).format("MM/DD/YYYY HH:mm A")}</h4>
            <div>
              <h1>{this.props.tryout.callback}</h1>
            </div>
            {this.props.tryout.attributes !== undefined ? <Button color="teal"><a href={this.props.tryout.attributes.service_url_link} target="_blank">Your Submitted Resume</a></Button> : <div>LOADING</div>}
          </div>
       )
     } else {
       return (
       <div>LOADING</div>
     )
     }
   }
 }



 export default connect(state => ({ currentActor: state.currentActor, audition: state.audition, tryout: state.tryout}), { loadAudition, loadTryout })(TryoutShow)
