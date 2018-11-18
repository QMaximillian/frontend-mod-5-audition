import React, { Component } from 'react'
import AllAuditionContainer from './AllAuditionsContainer'
import FilterSearch from '../components/FilterSearch'

export default class SearchContainer extends Component {
   render() {
     return (
        <div>
        <FilterSearch />
        <AllAuditionContainer />
        </div>
     )
   }
 };
