import React, { Fragment, Component } from 'react'
import { Dropdown, Form, Select } from 'semantic-ui-react'
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
         value: 'equity'
       },
       {
         text: 'Non-Equity',
         value: 'non-Equity'
       },
       {
         text: 'All',
         value: 'all'
       }
     ]

     let genderOptions = [
       {
         text: 'Male',
         value: 'male'
       },
       {
         text: 'Female',
         value: 'female'
       },
       {
         text: 'Transgender',
         value: 'transgender'
       },
       {
         text: 'All',
         value: 'all'
       }
     ]

     return (
       <React.Fragment>
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
         <Form.Select
           control={Select}
           width={6}
           name="gender"
           label='Gender'
           onChange={(event, state) => this.props.handleSearchChange(state)}
           options={genderOptions}
           value={this.props.gender}
           />
        </Form>
        </div>
      </React.Fragment>
     )
   }
 };
