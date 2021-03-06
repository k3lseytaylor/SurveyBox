import _ from 'lodash';
import React,{ Component } from 'react';
import { reduxForm, Field } from'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../Utils/validateEmails';
import formFields from './formFields'



class SurveyForm extends Component{
	renderField(){
		return _.map(formFields, ({label, name})=>{
			return (
				<Field 
					component = {SurveyField} 
					type = "text"
					label = {label}
					name = {name}
					key = {name}
				/>
			);

		});
	}


	render(){
		return(
			<div className='container' style={{marginTop:'10vh'}}>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
				{this.renderField()}
				<Link to="/surveys" className="red  btn-flat white-text">
					cancel
				</Link>

				<button type="submit" className="teal btn-flat right white-text">
					Next
					<i className="material-icons right">done</i>
				</button>
				</form>
			</div>
		);
	}
}

function validate(values) {
	
  const errors = {};

  errors.emails = validateEmails(values.recipients || '');

  _.each(formFields,({ name, noValueError})=>{
  	if(!values[name]){
  	  errors[name] = noValueError;
  	}
  });
  

  return errors;
}

export default reduxForm({
	validate,
	form : 'surveyForm',
	destroyOnUnmount:false
})(SurveyForm);