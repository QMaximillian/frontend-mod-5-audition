import React, { Component } from 'react'
import AllAuditionContainer from './AllAuditionsContainer'
import FilterSearch from '../components/FilterSearch'
import TheatersContainer from './TheatersContainer'

export default class SearchContainer extends Component {

    state = {
      searchType: ''
    }

    handleSearchTypeChange = (event) => {

      this.setState({
        [event.name]: event.value
      })
    }

   render() {
     return (
        <div>
        <FilterSearch handleSearchTypeChange={this.handleSearchTypeChange} searchType={this.state.searchType}/>
        </div>
     )
   }
 };
