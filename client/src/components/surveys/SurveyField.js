import React from 'react';


export default ({ input,label, meta: {error,touched} })=>{
	
	return(
		<div className="white-text">
			<u>
			  <label style={{fontSize:'1.2rem',color:'#ffffff'}}> {label} </label>
			</u>
			<input {...input} style={{marginBottom:'5px'}}/>
			<div className="red-text active" style={{marginBottom: '20px'}}>
				{touched && error}
			</div>
			
		</div>
	)
}