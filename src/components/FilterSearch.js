import React, { Component } from 'react'
import { Form, Select } from 'semantic-ui-react'
import "../Audition.css"


export default class FilterSearch extends Component {

   render() {
     
     let categoryOptions = [
       {
         text: 'Theaters',
         value: 'theaters'
       },
       {
         text: 'Auditions',
         value: 'auditions'
       },
       {
         text: 'All',
         value: 'all'
       }
     ]

     let equityOptions = [
       {
         text: 'Equity',
         value: 'true'
       },
       {
         text: 'Non-Equity',
         value: 'false'
       },
       {
         text: 'All',
         value: 'all'
       }
     ]

     return (
       <div className="centered filterbox">
       <Form>
         <Form.Select
           control={Select}
           width={6}
           name="searchType"
           label='Category'
           onChange={(event, state) => this.props.handleSearchChange(state)}
           options={categoryOptions}
           value={this.props.searchType}
           />
         <Form.Select
           control={Select}
           width={6}
           name="equity"
           label='Equity'
           onChange={(event, state) => this.props.handleSearchChange(state)}
           options={equityOptions}
           value={this.props.equity}

           />
         {/* <Form.Select
           control={Select}
           width={6}
           name="gender"
           label='Gender'
           onChange={(event, state) => this.props.handleSearchChange(state)}
           options={genderOptions}
           value={this.props.gender}
           /> */}
        </Form>
        </div>
     )
   }
 };
