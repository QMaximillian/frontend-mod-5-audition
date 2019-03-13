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
      // gender: 'all'
    }

    handleSearchChange = (state) => {
      this.setState({
        [state.name]: state.value
      })
    }

   render() {
     return (
       <Grid container style={{'padding-top': '100px'}}>
        <div>
          <FilterSearch
          handleSearchChange={this.handleSearchChange}
          searchType={this.state.searchType}
          equity={this.state.equity}
          /*gender={this.state.gender} *//>
          </div>



          { this.state.searchType === 'all' ?

          <div>
                <AllAuditionsContainer
                parent='tryThis'
                equity={this.state.equity}
                 />
                <TheatersContainer/>
          </div>
:

            this.state.searchType === 'auditions' ?
                <AllAuditionContainer
                  parent='tryThis' equity={this.state.equity}
                  />

             :

                 this.state.searchType === 'theaters' ?
                 <TheatersContainer /> :
                 <div></div>
            }
            </Grid>
     )
   }
 }

 export default withAuth(SearchContainer)
