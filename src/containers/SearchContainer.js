import React, { Component } from 'react'
import AllAuditionContainer from './AllAuditionsContainer'
import FilterSearch from '../components/FilterSearch'
import TheatersContainer from './TheatersContainer'
import AllAuditionsContainer from './AllAuditionsContainer'
import withAuth from '../hocs/withAuth'
import { Grid } from 'semantic-ui-react'


class SearchContainer extends Component {

    state = {
      searchType: 'all',
      equity: 'all',
    }

    handleSearchChange = (state) => {
      this.setState({
        [state.name]: state.value
      })
    }

    conditionalSearch = () => {
      switch (this.state.searchType) {
        case 'all':
          return (
            <div>
              <AllAuditionsContainer
                parent='tryThis'
                equity={this.state.equity}
              />
              <TheatersContainer />
            </div>
          )
        case 'auditions':
          return (
            <AllAuditionContainer
              parent='tryThis'
              equity={this.state.equity}
            />
          )
        case 'theaters':
          return <TheatersContainer />
        default:
          return <div></div>
      }
    }

   render() {
     return (
       <Grid container style={{'padding-top': '100px'}}>
        <div>
          <FilterSearch
            handleSearchChange={this.handleSearchChange}
            searchType={this.state.searchType}
            equity={this.state.equity}
            /*gender={this.state.gender} */
          />
        </div>
          {this.conditionalSearch()}
        </Grid>
     )
   }
 }

 export default withAuth(SearchContainer)
