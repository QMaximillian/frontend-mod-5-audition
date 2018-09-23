import React, { Component } from 'react'


export default class AuditionJournalSearch extends Component {
   render() {
     return (
        <div>
          <label>Search Auditions</label><br />

          <input onChange={this.props.handleSearch}></input>
        </div>
     )
   }
 };
