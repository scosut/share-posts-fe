import React from 'react'

const Form = (props) => {	
	const postTitle = props.data ? props.data.title : '';
	const postBody  = props.data ? props.data.body  : '';
	const errTitle  = props.errors.hasOwnProperty('title') ? 
				props.errors.title.error : '';
	const errBody   = props.errors.hasOwnProperty('body') ? 
				props.errors.body.error : '';
	
	return (
		<div className="row">
			<div className="col-md-6 mx-auto">
				<div className="card card-body bg-light mt-5">
					<h2>{props.title}</h2>

					<p>{props.instructions}</p>

					<form>
						<div className="form-group">
							<label htmlFor="title">Title: <sup>*</sup></label>
							<input type="text" name="title" id="title" className={errTitle.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} defaultValue={postTitle} onChange={props.change.title} />
							<span className="invalid-feedback">{errTitle}</span>
						</div>
						
						<div className="form-group">
							<label htmlFor="body">Body: <sup>*</sup></label>
							<textarea name="body" id="body" className={errBody.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} defaultValue={postBody} onChange={props.change.body}></textarea>
							<span className="invalid-feedback">{errBody}</span>
						</div>
						
						<button type="button" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Form;
