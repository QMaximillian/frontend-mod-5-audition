import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


export default class Search extends Component {


   render() {
     return (
        <div>
          <Input
            onChange={this.props.handleChange}
            value={this.props.search}>
          </Input>
        </div>
     )
   }
 };
