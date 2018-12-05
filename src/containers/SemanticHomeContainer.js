import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'


export default class SemanticHomeContainer extends Component {
   render() {
     return (
        <Grid container style={{height: '100vh'}}>
        <Grid.Row textAlign='center' verticalAlign='middle' style={{height: '25%', border: '2px red solid'}}>
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

        <Grid.Row style={{height: '25%', border: '2px red solid'}}>
          <Grid.Column width={6}>
          SecondRow
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '25%', border: '2px red solid'}}>
          <Grid.Column width={6}>
          Third Row
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{height: '25%', border: '2px red solid'}}>
          <Grid.Column width={6}>
          Fourth Row
          </Grid.Column>
        </Grid.Row>

        </Grid>
     )
   }
 }
