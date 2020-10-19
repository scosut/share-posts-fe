import React from 'react'

const Posts = (props) => {
	const message = props.message.length ? <div className="alert alert-success" id="msg-flash">{props.message}</div> : null;
	
	return (
		<React.Fragment>
			{message}
			<div className="row mb-3">
				<div className="col-md-6">
					<h1>Posts</h1>
				</div>
				<div className="col-md-6">
					<a href="/" className="btn btn-primary pull-right" onClick={(e) => props.click.nav('add', e)}>
						<i className="fa fa-plus"></i> Add Post
					</a>
				</div>
			</div>
			{props.data.map((post, index) =>		 
			<div key={index} className="card card-body mb-3">
				<h4 className="card-title">{post.title}</h4>
				<div className="bg-light p-2 mb-3">
					written by {post.name} on {post.postCreatedAt}
				</div>
				<p className="card-text">{post.body}</p>
				<a href="/" className="btn btn-dark" onClick={(e) => props.click.more(post.postId, e)}>More</a>
			</div>
			)}
		</React.Fragment>
	)
}

export default Posts;
