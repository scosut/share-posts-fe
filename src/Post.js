import React from 'react'

const Post = (props) => {
	const isAuthor  = Number(props.data.userId) === Number(props.user.id);
	const btnEdit   = isAuthor ? <a href="/" className="btn btn-dark" onClick={(e) => props.click.nav('edit', e)}>Edit</a> : null;
	const btnDelete = isAuthor ? <button type="button" className="btn btn-danger pull-right" onClick={props.click.del}>Delete</button> : null;
	
	return (
		<React.Fragment>
			<a href="/" className="btn btn-light" onClick={(e) => props.click.nav('posts', e)}><i className="fa fa-backward"></i> Back</a>

			<h1 className="mb-3 mt-3">{props.data.title}</h1>

			<div className="bg-secondary text-white p-2 mb-3">
				written by {props.data.name} on {props.data.postCreatedAt}
			</div>

			<p>{props.data.body}</p>

			<hr />
			
			{btnEdit}			
			{btnDelete}			
		</React.Fragment>
	)
}

export default Post;