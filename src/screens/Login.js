import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./css/login-signup.css";
import fire from './../fire';
import { Redirect } from "react-router-dom";

function Login(){

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [authError, setAuthError] = useState('');
	const [redirect, setRedirect] = useState(false);

	const onSubmit=e=>{
		e.preventDefault();
		
		fire.auth().signInWithEmailAndPassword(email, password).then(us=>{
			setRedirect(true);
		}).catch(err=>{
			setAuthError(err.message);
		});
			
		setEmail('');
		setPassword('');
	}

	const forgotPass=()=>{
		if(email!==""){
		fire.auth().sendPasswordResetEmail(email)
			.then(()=> alert("Email sent please reset your password."))
			.catch(err=>alert(err.message));
		}
	}
	
	if(redirect) return Redirect("/");
	
	return(
		<div className="main-container">
			<div>
				<h4>SIGNUP</h4>
				<form className="login-signup-form">
					<input autoFocus required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="example@gmail.com"/><br/>
					<input required type={showPassword?"text":"password"} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
						<h6 className="show-password-btn" onClick={e=>setShowPassword(!showPassword)}>{showPassword?"Hide":"Show"} Password</h6>
					<br/>
					<button onClick={onSubmit} type="submit">login</button><br/>
				</form>
				<h6>Do not have an account? Please <Link to="/signup">signup</Link></h6>
				{authError!=='' && <h6 className="auth-error">{authError}</h6>}
				<h6 className="forgot-pass" onClick={forgotPass}>Forgot password?</h6>
			</div>
		</div>
	)
}

export default Login;
