import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'



export default class SemanticHomeContainer extends Component {
   render() {
     return (
        <Grid
        style={{padding: '100px', height: '100vh'}}
        >
        <Grid.Row textAlign='center' verticalAlign='left' style={{height: '40%', border: '2px red solid', 'background-image': "url(https://s11986.pcdn.co/wp-content/uploads/2016/03/widescreen-iphone-photo.jpg)", 'background-repeat': 'no-repeat', 'background-size': 'cover', 'background-opacity': '0.1'}}>

          <Grid.Column width={5}>
          SemanticHomeContainer
          </Grid.Column>
          <Grid.Column width={6}>
          SemanticHomeContainer
          </Grid.Column>
          <Grid.Column width={5}>
          SemanticHomeContainer
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center' verticalAlign='middle' style={{height: '30%', border: '2px red solid'}}>
          <Grid.Column width={5}>
          Why
          </Grid.Column>
          <Grid.Column width={5}>
          How
          </Grid.Column>
          <Grid.Column width={5}>
          About
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center' verticalAlign='middle' style={{height: '10%', border: '2px red solid'}}>
          <Grid.Column width={15}>
          Tour
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '10%', border: '2px red solid'}}>
          <Grid.Column width={6}>
          Disclaimer/Information
          </Grid.Column>
        </Grid.Row>

        </Grid>
     )
   }
 }
