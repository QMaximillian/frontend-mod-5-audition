import React, { Fragment, Component } from 'react'
import { Dropdown, Form, Select } from 'semantic-ui-react'
import "../Audition.css"
export default class FilterSearch extends Component {



   render() {
     console.log(this.props);
     let categoryOptions = [
       {
         text: 'Theaters',
         value: 'theaters'
       }, {
         text: 'Auditions',
         value: 'auditions'
       }
     ]

     let equityOptions = [
       {
         text: 'Equity',
         value: 'Equity'
       },
       {
         text: 'Non-Equity',
         value: 'Non-Equity'
       }
     ]

     let genderOptions = [
       {
         text: 'Male',
         value: 'Male'
       },
       {
         text: 'Female',
         value: 'Female'
       },
       {
         text: 'Transgender',
         value: 'Transgender'
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
           onChange={(event, state) => this.props.handleSearchTypeChange(state)}
           options={categoryOptions}
           value={this.props.searchType}
           />
        </Form>
          // <Dropdown onChange={this.handleSearchType} className="inline" placeholder='Category' fluid selection options={categoryOptions}/>
          // <Dropdown className="inline" placeholder='Equity Status' fluid selection options={equityOptions}/>
          // <Dropdown className="inline" placeholder='Gender' fluid selection options={genderOptions}/>

        </div>
      </React.Fragment>
     )
   }
 };
