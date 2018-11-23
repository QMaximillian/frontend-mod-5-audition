import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import "../Audition.css"
import { loadAudition } from '../actions/actions'
import moment from 'moment'
import withAuth from '../hocs/withAuth'


class MyAuditionsContainer extends Component {

  // Return the ordinal suffix of a number (e.g. For one, "st", for 30, "th")
  getOrdinal = (n) => {
    // The array "s" is in order of where commonly the ordinal appears (i.e. "0th, 1st, 2nd, 3rd")
    let s = ["th","st","nd","rd"]
    // "v" is getting the remainder of the argument "n" and storing the remainder, reducing each number to a range of 1-99. By giving us the last two places in any number, we get rid of unimportant numbers for determing to ordinal.
    let v = n % 100;

    // Here we return the number and the ordinal associated with it. "s[0]" is the base case, as the majority of numbers will end in "th". Otherwise "s[v]" will commonly return "st", "nd", and "rd". "s[(v-20)%10]" will return special cases like "0th" and "23rd" where the setup of the array 's' will not inherently work.
    return n+(s[(v-20)%10]||s[v]||s[0]);
  }


  mappedTryout = (audition) => {
  // Find all tryouts related to the this audition
  const tryouts = this.props.currentActor.attributes.tryouts.filter(tryout => {
       return tryout.audition_id === audition.id
    })
  // Map over these tryouts and return the audition date and time and which tryout it is ("1st, 2nd, 3rd")
    return tryouts.map((tryout, i) => {
      return (
        <div>
        <h3>{this.getOrdinal(i + 1)} Tryout</h3>
        <Link to={`tryout/${tryout.id}`}>
        <div className="card">
          {moment(tryout.audition_time).format("MM/DD/YYYY HH:mm A")}
        </div>
        </Link>
        </div>
      )
    })
  }


  mappedAuditions = () => {
    // Map over the auditions and return the audition's show_name and tryouts associated to you and the audition
    return this.props.currentActor.attributes.auditions.map(audition => {
      return (<div>
                <h1>
                  {audition.show_name}
                </h1>
                  {this.mappedTryout(audition)}
              </div>
            )
      })
  }


   render() {
      if (typeof this.props.currentActor.attributes === 'undefined') {
          return (
            <div><Loader active inline='centered' /></div>
          )
        } else if (this.props.currentActor.attributes.tryouts.length === 0){
        return(
          <h1 style={{textAlign: 'center', fontSize: '2rem'}}>
            {this.props.currentActor.attributes.first_name} has no auditions
          </h1>
        )
      } else {
       return (
         <div>
           <div style={{textAlign: "center", fontSize: "2em"}}>
           {this.props.currentActor.attributes.first_name}'s Auditions
          </div>
          <div className="card-container">
            {this.mappedAuditions()}
          </div>
          </div>
       )
     }
   }


 }


 export default withAuth(connect(state => ({ auditions: state.auditions, tryouts: state.tryouts, currentActor: state.currentActor }), { loadAudition })(MyAuditionsContainer))
