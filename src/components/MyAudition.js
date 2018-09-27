import React, { Component } from 'react'


class MyAudition extends Component {
   render() {
     return (
        <div>
          <div>{this.props.audition.show_name}</div>
          {console.log(this.props)}
        </div>
     )
   }
 };

export default MyAudition
