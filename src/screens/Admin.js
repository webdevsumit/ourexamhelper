import React, {useState, useEffect} from 'react';
import './css/admin.css';
import fire from "./../fire";


function Admin(){

	const [user, setUser] = useState(false);

	useEffect(()=>{
		fire.auth().onAuthStateChanged(user=>{
			if(user) {
				if(user.emailVerified) {
					setUser(user);
				}
				else{
					user.sendEmailVerification();
					alert("Email sent, please verify and then login again!");
					fire.auth().signOut();
				}
			}
			else setUser(false);
		})
	},[]);

	
	return(
		<div className='admin'>
			<h4>ADMIN</h4>
			{user?<div>
				{JSON.stringify(user)}
			</div>:<p>This page not for you.</p>}
		</div>
	);
}

export default Admin;
