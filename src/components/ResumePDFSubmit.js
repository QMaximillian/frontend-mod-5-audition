import React, { Component } from 'react'
import { fetchPostTryout } from '../adapters/actorAdapter'
import { Button, Input } from 'semantic-ui-react'

export default class ResumePDFSubmit extends Component {


  state = {
    file: '',

  }

  handleFileChange = (event) => {
    this.setState({
      file: event.target.files[0]
    }, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('tryout[resume]', this.state.file)
    formData.append('tryout[actor_id]', 1)
    formData.append('tryout[audition_id]', this.props.match.params.id, )

    fetchPostTryout(formData)
  }


   render() {
     console.log(this.props)
     return (
      <React.Fragment>
      <div className="card">
        <div style={{textAlign: 'center'}}>
         <div>
            <Input
              multiple
              name="pdf"
              type="file"
              onChange={this.handleFileChange}
              filename={this.state.file}>
            </Input>
            {/* <Input
              name="img"
              type="file"
              onChange={this.handleFileChange}
              filename={this.state.headshot}>
            </Input> */}
         </div>
       <Button onClick={(event) => this.handleSubmit(event)}>
         Submit for Audition
       </Button>
       </div>
      </div>
      </React.Fragment>
    )
   }
 }
