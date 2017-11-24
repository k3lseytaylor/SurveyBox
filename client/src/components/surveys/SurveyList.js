import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
  console.log(this.props.surveys)
  if(this.props.surveys.length<=0){
    return (
      <div className="white-text" style={{textAlign:'center',fontSize:'x-large',marginTop:'250px'}}>
        <p>Please Create A Survey</p>
        <p>By Clicking on the Red button on the right-hand side</p>
      </div>
      )
  }

    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a className="green-text">Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
  	console.log(this.props);
    return (
      <div className="container">
       {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);