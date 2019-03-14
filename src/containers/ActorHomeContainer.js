import React, { Component } from 'react'
import ActorUpcomingAuditions from '../components/ActorUpcomingAuditions'
import { connect } from 'react-redux'
import '../Audition.css'
import Search from '../components/Search'
import withAuth from '../hocs/withAuth'
import { Grid, Segment, Header, Container, Responsive } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'



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
      <Responsive>
      <Grid container columns='equal' style={{'padding-top': '100px', textAlign: 'center', height: '100vh'}} >
            <Grid.Row style={{height: '10%'}}>
              <Grid.Column>
              <h1>Welcome to Audition</h1>
              </Grid.Column>
            </Grid.Row>


              <Grid.Row style={{height: '25%'}}>
              {/*
              <Grid.Column width={4}>
                MENU
              </Grid.Column>
              <Grid.Column width={4}>
                ME
              </Grid.Column>
              <Grid.Column width={4}>
                HELLO
              </Grid.Column> */}
              <Grid.Column stretched width={16}>
                <Search search={this.state.search} handleChange={this.handleChange}/>
                <ActorUpcomingAuditions search={this.state.search}/>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{height: '25%'}}>
              <Grid.Column width={4}>

              </Grid.Column>
              <Grid.Column width={4}>

              </Grid.Column>
              <Grid.Column width={4}>

              </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{height: '25%'}}>
              <Grid.Column width={4}>

              </Grid.Column>
              <Grid.Column width={4}>

              </Grid.Column>
              <Grid.Column width={4}>

              </Grid.Column>
            </Grid.Row>


            <Segment vertical style={{height: '15%'}}>
              <Container>
                <Grid divided>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header  as='h4' content='More Options' />
                      {/*<List link >
                      <Link push to='/about'>
                        <List.Item as='a'>About</List.Item>
                      </Link>
                      <br />
                      <Link push to='/contact'>
                        <List.Item as='a'>Contact Us</List.Item>
                      </Link>
                      </List>*/}
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <Header as='h4' >
                        Audition
                      </Header>
                      <p>
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </Grid>
          </Responsive>
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
