import React, {useState, useEffect} from 'react';
import './css/admin.css';
import fire from "./../fire";


function Admin(){

	const [user, setUser] = useState(false);

	useEffect(()=>{
		fire.auth().onAuthStateChanged(user=>{
			if(user && user.email==='baani.rathor@gmail.com') {
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
	const [msg , setMsg] = useState('');

	const ref = fire.firestore().collection("current-affair-days");

	const onSubmitForm=(e)=>{
		e.preventDefault();
		if(title && date && thumbnail && mainImage && description){
			ref.add({
				Name:title,
				Date:date,
				Image:thumbnail
			}).then(addedData=>{
				ref.doc(addedData.id).collection("Details").add({
					Detail:description,
					Image:mainImage
				}).then(d=>{
					setTitle('');
					setDate('');
					setThumbnail('');
					setMainImage('');
					setDescription('');
					setMsg('');
				})
			});
		}else{
			setMsg("Please fill all fields!")
		}
	}
	
	return(
		<div className='admin'>
			<h4>ADMIN</h4>
			{user?<div className="form">
				<input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)}/><br/><br/>
				<input type="text" placeholder="Thumbnail and second image URL" onChange={e=>setThumbnail(e.target.value)}/><br/><br/>
				<input type="text" placeholder="Main or first image URL" onChange={e=>setMainImage(e.target.value)}/><br/><br/>
				<textarea cols="40" rows="30" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}></textarea><br/><br/>
				<input type="text" placeholder="eg. 2021-9-25" onChange={e=>setDate(e.target.value)}/><br/><br/>
				{msg && <p className="err-msg">{msg}</p>}
				<input type="submit" onClick={onSubmitForm}/>
			</div>:<p className="admin-not-p">This page is just for Admin Users.</p>}
		</div>
	);
}

export default Admin;
