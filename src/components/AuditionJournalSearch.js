import React, { Component } from 'react'


export const AuditionJournalSearch = (props) => {
  render() {
    return (
      <div>
        <label>Search Auditions</label><br />
        <input onChange={this.props.handleSearch}></input>
      </div>
    )
  }
}
