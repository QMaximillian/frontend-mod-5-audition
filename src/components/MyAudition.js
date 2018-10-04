import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadAudition } from '../actions/actions'
import { Loader } from 'semantic-ui-react'

class MyAudition extends Component {


    componentDidMount(){
      this.props.loadAudition(this.props.tryout.audition_id)
    }

    auditionFind = () => {
      return this.props.audition.find(audition => {
            return parseInt(audition.id) === this.props.tryout.audition_id
        })
    }

   render() {
     console.log("Audition", (this.props.audition))

     if (this.props.audition !== 0 ) {
     return (
         <Link to={`/my-auditions/tryouts/${this.props.tryout.id}`}>
         {console.log(this.props.tryout)}
        <div className="play-tab-card-1">

        </div>
        </Link>
     )
   } else {
     return <Loader />
   }

   }
 };

export default connect(state => ({ currentActor: state.currentActor, audition: state.audition }), { loadAudition })(MyAudition)
