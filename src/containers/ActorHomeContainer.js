import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import { connect } from 'react-redux'
// import { loadInitialActorState } from '../actions/actions'
import '../Audition.css'
import Search from '../components/Search'
import withAuth from '../hocs/withAuth'
import { Grid } from 'semantic-ui-react'



class ActorHomeContainer extends Component {

  // State is holding information related to searching for the name of an audition in the future or the past
  state = {
    search: ''
  }

  // This handleChange is handling the onChange input in the <Search /> component and updating this.state.search in ActorHomeContainer
  handleChange = (event) => {
      this.setState({
        search: event.target.value
      })
  }

  // Loads all of the relevant information associated with the Actor signed-in

  render() {
    console.log(this.props)
    return (
      <Grid container columns='equal' style={{textAlign: 'center'}} >
            <Grid.Row columns={1}>
              <Grid.Column>
              <h1>Welcome to Audition</h1>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
              <Grid.Column width={4}>
                AuditionDay
              </Grid.Column>
              <Grid.Column width={4}>
                HELLO
              </Grid.Column>
              <Grid.Column width={4}>
                HELLO
              </Grid.Column>
              <Grid.Column stretched width={4}>
                <Search search={this.state.search} handleChange={this.handleChange}/>
                <ActorUpcomingAuditions search={this.state.search}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={4}>
              <Grid.Column width={4}>
                HELLO
              </Grid.Column>
              <Grid.Column width={4}>
                HELLO
              </Grid.Column>
              <Grid.Column width={4}>
                HELLO
              </Grid.Column>
              <Grid.Column width={4}>

              </Grid.Column>
            </Grid.Row>




          </Grid>
        )
  }
}

  // mapping loaded in values from loadInitialActorState in componentDidMount
const mapStateToProps = (state) => {
  return {
    currentActor: state.currentActor,
    auditions: state.auditions,
    tryouts: state.tryouts,
    auditionJournals: state.auditionJournals
  }
}

export default withAuth(connect(mapStateToProps)(ActorHomeContainer))
