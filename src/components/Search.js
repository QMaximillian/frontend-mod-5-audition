import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


export default class Search extends Component {


   render() {
     return (
        <div>
          <Input style={{width: "300px"}}
            placeholder="Search for your upcoming auditions..."
            onChange={this.props.handleChange}
            value={this.props.search}>
          </Input>
        </div>
     )
   }
 };
