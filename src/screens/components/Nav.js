import React,{ useState, useEffect } from 'react';
import './../css/Nav.css';
import { Link } from "react-router-dom";
import fire from './../../fire';


function Nav(props){

	const [menu, setMenu] = useState(false);
	const [user, setUser] = useState(false);

	useEffect(()=>{
		fire.auth().onAuthStateChanged(user=>{
			if(user) setUser(user);
			else setUser(false);
		})
	},[]);

	const forgotPass=()=>{
		if(user.email!==""){
		fire.auth().sendPasswordResetEmail(user.email)
			.then(()=> alert("Email sent please reset your password."))
			.catch(err=>alert(err.message));
		}
	};

	const handleLogout = () => {
		fire.auth().signOut().then(()=>{
			setUser(false);
			props.removeUser();
		})
	}
	
	return(
		<nav>
			<div className='logo-div'>
				<img className='logo' src="./assets/o-logo.png" alt='logo'/>
				<h4 className="nav-head">Our Exam Helper</h4>
			</div>
			
			<div>
				{!menu?
				<div className="nav-menu" onClick={()=>setMenu(true)}>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
				</div>
				:
				<div className="menu-content" onClick={()=>setMenu(false)}>
					<h2 className="nav-menu-cross">X</h2>
					<div className="menu-items">
						<Link className="links" to="/">HOME</Link><br/>
						<Link className="links" to="/curret-affairs">CURRENT AFFAIRS</Link><br/>
						<Link className="links" to="/contact-us">CONTACT US</Link><br/>

						{!user?
						<div className="menu-items">
							<Link className="links" to="/login">LOGIN</Link><br/>
							<Link className="links" to="/signup">SIGNUP</Link><br/>
						</div>
						:<div className="menu-items">
							<Link className="links" to="/" 
								onClick={forgotPass}>RESET PASSWORD</Link><br/>
							<Link className="links" to="/" 
								onClick={handleLogout}>LOGOUT</Link>
						</div>}
					</div>
				</div>
				}
				
			</div>
		</nav>
	)
}

export default Nav;
