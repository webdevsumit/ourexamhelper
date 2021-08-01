import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./css/login-signup.css";
import fire from './../fire';
import { Redirect } from "react-router-dom";


function Signup(){

	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [authError, setAuthError] = useState('');
	const [redirect, setRedirect] = useState(false);

	const onSubmit=e=>{
		e.preventDefault();

		if(password1===password2){
		
			fire.auth().createUserWithEmailAndPassword(email, password1).then(us=>{
				us.user.sendEmailVerification();
				alert("Email sent. Please first verify it and then click ok.");
				setRedirect(true);
			}).catch(err=>{
				setAuthError(err.message);
			});
			
			setEmail('');
		}else{
			alert("Passwords are not matching!");
		}
		
		setPassword1('');
		setPassword2('');
	}

	if(redirect) return Redirect("/");
	
	return(
		<div className="main-container">
			<div>
				<h4>SIGNUP</h4>
				<form className="login-signup-form">
					<input autoFocus required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/><br/>
					<input required type="password" value={password1} onChange={e=>setPassword1(e.target.value)} placeholder="Password"/><br/>
					<input required type="password" value={password2} onChange={e=>setPassword2(e.target.value)} placeholder="Confirm Password"/><br/>
					<button onClick={onSubmit} type="submit">sign up</button><br/>
				</form>
				<h6>Already have an account? Please <Link to="/login">login</Link></h6>
				{authError!=='' && <h6 className="auth-error">{authError}</h6>}
			</div>
		</div>
	)
}

export default Signup;
