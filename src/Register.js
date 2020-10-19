import React from 'react'

const Register = (props) => {
	const errName     = props.errors.hasOwnProperty('name') ? 
				props.errors.name.error : '';
	const errEmail    = props.errors.hasOwnProperty('email') ? 
				props.errors.email.error : '';
	const errPassword = props.errors.hasOwnProperty('password') ? 
				props.errors.password.error : '';
	const errConfirm  = props.errors.hasOwnProperty('confirm') ? 
				props.errors.confirm.error : '';
	
	return (
		<div className="row">
			<div className="col-md-6 mx-auto">
				<div className="card card-body bg-light mt-5">
					<h2>Create an Account</h2>

					<p>Please complete this form to register with us.</p>

					<form>
						<div className="form-group">
							<label htmlFor="name">Name: <sup>*</sup></label>
							<input type="text" name="name" id="name" className={errName.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} onChange={props.change.name} />
							<span className="invalid-feedback">{errName}</span>
						</div>
						
						<div className="form-group">
							<label htmlFor="email">Email: <sup>*</sup></label>
							<input type="test" name="email" id="email" className={errEmail.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} onChange={props.change.email} />
							<span className="invalid-feedback">{errEmail}</span>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password: <sup>*</sup></label>
							<input type="password" name="password" id="password" className={errPassword.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} onChange={props.change.password} />
							<span className="invalid-feedback">{errPassword}</span>
						</div>

						<div className="form-group">
							<label htmlFor="confirm">Confirm Password: <sup>*</sup></label>
							<input type="password" name="confirm" id="confirm" className={errConfirm.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} onChange={props.change.confirm} />
							<span className="invalid-feedback">{errConfirm}</span>
						</div>

						<div className="row">
							<div className="col">
								<button type="button" className="btn btn-success btn-block" onClick={props.handleSubmit}>Register</button>
							</div>
							<div className="col">
								<a href="/" className="btn btn-light btn-block" onClick={(e) => props.click('login', e)}>Have account? Login</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register;
