import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Register from './Register';
import Login from './Login';
import Posts from './Posts';
import Post from './Post';
import Form from './Form';

function App() {
	// state
	const [nav, setNav]           = useState('');
	const [posts, setPosts]       = useState([]);
	const [post, setPost]         = useState({});
	const [user, setUser]         = useState({});
	const [title, setTitle]       = useState('');
	const [body, setBody]         = useState('');
	const [name, setName]         = useState('');
	const [email, setEmail]       = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm]   = useState('');
	const [errors, setErrors]     = useState({});
	const [message, setMessage]   = useState('');
	
	
	const fetchPosts = () => {
		fetch('https://post.projectsbyscott.com/api').then(result => result.json()).then(data => setPosts(data));
	};
	
	// runs everytime change in state occurs
	// runs only once due to empty array
	useEffect(() => {
		fetchPosts();
	}, []);
	
	const handleNavClick = (str, e) => {
		if (e) {
			e.preventDefault();
			setMessage('');
		}
		
		if (str === 'edit') {
			setTitle(post.title);
			setBody(post.body);
		}
		else {
			setTitle('');
			setBody('');
			setName('');
			setEmail('');
			setPassword('');
			setConfirm('');
			setErrors({});
			setPost({});
		}
		
		if (str === 'logout') {
			setUser({});
		}
		
		setNav(str);
	}
	
	const handleMoreClick = (id, e) => {
		e.preventDefault();
		
		const arr = posts.filter((a) => {
			return Number(a.postId) === Number(id);
		});
		
		setPost(arr[0]);
		setMessage('');
		setNav('post');
	}
	
	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	}
	
	const handleBodyChange = (e) => {
		setBody(e.target.value);
	}
	
	const handleNameChange = (e) => {
		setName(e.target.value);
	}
	
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}
	
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}
	
	const handleConfirmChange = (e) => {
		setConfirm(e.target.value);
	}
	
	const setFocus = (str) => {
		const tgt = document.getElementById(str);
		
		if (tgt) {
			tgt.focus();
		}
	}
	
	const handleAdd = () => {
		const data = {title: title, body: body, user_id: user.id};
		fetch('https://post.projectsbyscott.com/api/add', {method: 'POST', body: JSON.stringify(data)}).then(result => result.json()).then(data => { if (data.succeeded) { setMessage(data.message); fetchPosts(); handleNavClick('posts');} else { setErrors(data.errors); setFocus(data.target);}});
	}
	
	const handleEdit = () => {
		const data = {title: title, body: body, user_id: user.id, id: post.postId};
		fetch('https://post.projectsbyscott.com/api/edit', {method: 'POST', body: JSON.stringify(data)}).then(result => result.json()).then(data => { if (data.succeeded) { setMessage(data.message); fetchPosts(); handleNavClick('posts');} else { setErrors(data.errors); setFocus(data.target);}});
	}
	
	const handleDelete = () => {
		const data = {id: post.postId};
		fetch('https://post.projectsbyscott.com/api/delete', {method: 'POST', body: JSON.stringify(data)}).then(result => result.json()).then(data => { if (data.succeeded) { setMessage(data.message); fetchPosts(); handleNavClick('posts');}});
	}
	
	const handleRegistration = () => {
		const data = {name: name, email: email, password: password, confirm: confirm};
		fetch('https://post.projectsbyscott.com/api/register', {method: 'POST', body: JSON.stringify(data)}).then(result => result.json()).then(data => { if (data.succeeded) { setMessage(data.message); handleNavClick('login');} else { setErrors(data.errors); setFocus(data.target);}});
	}
	
	const handleLogin = () => {
		const data = {email: email, password: password};
		fetch('https://post.projectsbyscott.com/api/login', {method: 'POST', body: JSON.stringify(data)}).then(result => result.json()).then(data => { if (data.succeeded) { setMessage(''); setUser(data.user); handleNavClick('posts');} else { setErrors(data.errors); setFocus(data.target);}});
	}
	
	const showHome = () => {
		return <Home />;
	}
	
	const showAbout = () => {
		return <About />;
	}
	
	const showLogin = () => {
		return <Login click={handleNavClick} handleSubmit={handleLogin} errors={errors} change={{email: handleEmailChange, password: handlePasswordChange}} message={message} />;
	}
	
	const showRegister = () => {
		return <Register click={handleNavClick} handleSubmit={handleRegistration} errors={errors} change={{name: handleNameChange, email: handleEmailChange, password: handlePasswordChange, confirm: handleConfirmChange}} />;
	}
	
	const showPosts = () => {
		return <Posts data={posts} message={message} click={{nav: handleNavClick, more: handleMoreClick}} />;
	}
	
	const showPost = () => {
		return <Post data={post} user={user} click={{nav: handleNavClick, del: handleDelete}} />;
	}
	
	const showAdd = () => {
		return <Form title='Add' instructions='Create a post with this form.' handleSubmit={handleAdd} data={post} errors={errors} change={{title: handleTitleChange, body: handleBodyChange}} />
	}
	
	const showEdit = () => {
		return <Form title='Edit' instructions='Update a post with this form.' handleSubmit={handleEdit} data={post} errors={errors} change={{title: handleTitleChange, body: handleBodyChange}} />
	}
	
	const showContent = () => {
		let content;
		
		switch (nav) {
			case 'about':
				content = showAbout();
				break;
			case 'login':
				content = showLogin();
				break;
			case 'register':
				content = showRegister();
				break;
			case 'posts':
				content = showPosts();
				break;
			case 'post':
				content = showPost();
				break;
			case 'add':
				content = showAdd();
				break;
			case 'edit':
				content = showEdit();
				break;
			default:
				content = showHome();
		}
		
		return content;
	}
	
	return (
    <div className="container">
    	<Navigation click={handleNavClick} user={user} />
			{ showContent() }
    </div>
  );
}

export default App;
