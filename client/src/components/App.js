import React,{ Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/Surveynew';
import Footer from './Footer';
import Background from '../assets/Background.jpg';


class App extends Component  {
	componentDidMount(){
		this.props.fetchUser();
	}

	render(){
		return (
		  <div style={{backgroundImage: `url(${Background})`,backgroundRepeat:'no-repeat',backgroundSize:'100vw 100vh'}}>
		  	<BrowserRouter>
		  		<div style={{display:'flex',minHeight:'100vh',flexDirection:'column'}}>
		  		  <Header/>
		  		  <div style={{flex:"1"}}>
			  		  <Route exact path = "/" component={Landing} />
			  		  <Route exact path = "/surveys" component={Dashboard} />
			  		  <Route path = "/surveys/new" component={SurveyNew} />
		  		  </div>
		  		  <Footer />
		  		</div>
		  	</BrowserRouter>
		  </div>
		);
    }
};

export default connect(null, actions)(App);
