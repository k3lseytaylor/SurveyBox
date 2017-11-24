import React from 'react';


export default ({ input,label, meta: {error,touched} })=>{
	
	return(
		<div >
		    <label> {label} </label>
			<input {...input} style={{marginBottom:'5px'}}/>
			<div className="red-text active" style={{marginBottom: '20px'}}>
				{touched && error}
			</div>
			
		</div>
	)
}