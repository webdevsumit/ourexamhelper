import React,{useState, useEffect} from 'react';
import DateCard from "./components/DateCard";
import "./css/CurrentAffairs.css"
import fire from "./../fire";

function CurrentAffairs(){

	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const ref = fire.firestore().collection("current-affair-days");

	const getData=()=>{
		setLoading(true);
		ref.get().then(querySnapshot=>{
			const items = [];
			querySnapshot.forEach(doc=>{
				items.push({'id':doc.id, 'data': doc.data()});
			});
			
			setData(items.reverse());
			setLoading(false);
		}).catch(err=>{
			alert(err);
		});
	};

	useEffect(()=>{
		getData();
	},[]);

	const [details, setDetails] = useState(false);
	
	
	const getDetails=(id, Name, Image, date)=>{
			ref.doc(id).collection('Details').get().then(querySnapshot=>{
				const items = [];
				 querySnapshot.forEach(doc=>{
					 items.push(doc.data());
				 });
				
				setDetails({
					'id':id,
					'Name':Name,
					'Image':Image,
					'date':date,
					'details':items
				});
			}).catch(err=>{
				alert(err);
			});
		};
	

	if(loading) return(<div><h5>loading...</h5></div>);
	
	return(
		<div className="current-affairs">
			<h3 className="current-affairs-head">CURRENT AFFAIRS</h3>
			<div className="cards">
				{data.map(d=><DateCard
					key={d.id}
					id={d.id}
					PostDate={d.data.Date.seconds}
					Image={d.data.Image}
					Name={d.data.Name}
					click={getDetails}
					/>)}
			</div>
			{details && <div className='detailed-page'>
				<h3>{details.Name}</h3>
				<h6><em>{details.date}</em></h6>
				<img src={details.details[0].Image}/>
				<button onClick={()=>setDetails(false)}>X</button>
				<p>{details.details[0].Detail}</p>
				<img src={details.Image}/>
			</div>}
		</div>
	)
}

export default CurrentAffairs;
