import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';



class Header extends Component {
	renderContent(){
		switch(this.props.auth){
			case null:
				return;
			case false:
				return (<li><a href='/auth/google'>Login With Google</a></li>);
			default:
			    return [
			    <li key='amount' style={{margin:'0 10px'}}> Credits :{this.props.auth.credits}</li>,
			    <li key='payment'> <Payments/> </li>,
			    <li key='logout'>
				    
						<a href='/api/logout'>Logout</a>
				   
			    </li>
			    ];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper indigo">
					<Link 
					to= {this.props.auth ?'/surveys':'/'} 
					className="left brand-logo"
					>
					Emaily
					</Link>
					<ul className="right">
                       {this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function MapStateToProps({ auth }){
	return { auth };
}

export default connect(MapStateToProps)(Header);
;