import React, { Component } from 'react'
import AllAuditionContainer from './AllAuditionsContainer'
import FilterSearch from '../components/FilterSearch'
import TheatersContainer from './TheatersContainer'
import AllAuditionsContainer from './AllAuditionsContainer'

export default class SearchContainer extends Component {

    state = {
      searchType: '',
      equity: '',
      gender: ''
    }

    handleSearchChange = (state) => {
      this.setState({
        [state.name]: state.value
      }, () => console.log(this.state))
    }

   render() {
     return (
        <div>
          <div>
          <FilterSearch
          handleSearchChange={this.handleSearchChange}
          searchType={this.state.searchType}
          equity={this.state.equity}
          gender={this.state.gender}/>
          </div>
          <div>
          <br />
          <br />
          { this.state.searchType === 'all' ? <div><div><AllAuditionsContainer /></div><div><TheatersContainer/></div></div> : this.state.searchType === 'auditions' ? <AllAuditionContainer
          parent='tryThis' equity={this.state.equity}/> : this.state.searchType === 'theaters' ? <TheatersContainer /> : <div></div> }

          </div>
        </div>
     )
   }
 }
