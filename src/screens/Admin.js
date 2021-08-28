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

	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [mainImage, setMainImage] = useState('');
	const [description, setDescription] = useState('');
	
	return(
		<div className='admin'>
			<h4>ADMIN</h4>
			{user?<div>
				<input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/><br/><br/>
				<input type="file" placeholder="Thumbnail" accept="image/*" onChange={e=>setThumbnail(e.target.files[0])}/><br/><br/>
				<input type="file" accept="image/*" onChange={e=>setMainImage(e.target.files[0])}/><br/><br/>
				<textarea cols="40" rows="30" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea><br/><br/>
				<input type="datetime-local" placeholder="Date" onChange={e=>setDate(e.target.value)}/><br/><br/>
				<input type="submit" />
			</div>:<p>This page not for you.</p>}
		</div>
	);
}

export default Admin;
