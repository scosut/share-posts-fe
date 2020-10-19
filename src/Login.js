import React from 'react'

const Login = (props) => {
	const message     = props.message.length ? <div className="alert alert-success" id="msg-flash">{props.message}</div> : null;
	const errEmail    = props.errors.hasOwnProperty('email') ? 
				props.errors.email.error : '';
	const errPassword = props.errors.hasOwnProperty('password') ? 
				props.errors.password.error : '';
	
	return (
		<div className="row">
			<div className="col-md-6 mx-auto">
				<div className="card card-body bg-light mt-5">
					{message}
		
					<h2>Login</h2>

					<p>Please provide your credentials to login.</p>

					<form>
						<div className="form-group">
							<label htmlFor="email">Email: <sup>*</sup></label>
							<input type="text" name="email" id="email" className={errEmail.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} onChange={props.change.email} />
							<span className="invalid-feedback">{errEmail}</span>
						</div>
						
						<div className="form-group">
							<label htmlFor="password">Password: <sup>*</sup></label>
							<input type="password" name="password" id="password" className={errPassword.length ? 'form-control form-control-lg is-invalid' : 'form-control form-control-lg'} onChange={props.change.password} />
							<span className="invalid-feedback">{errPassword}</span>
						</div>

						<div className="row">
							<div className="col">
								<button type="button" className="btn btn-success btn-block" onClick={props.handleSubmit}>Login</button>
							</div>
							<div className="col">
								<a href="/" className="btn btn-light btn-block" onClick={(e) => props.click('register', e)}>No account? Register</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;
