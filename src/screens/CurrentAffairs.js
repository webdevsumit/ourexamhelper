import React,{useState, useEffect} from 'react';
import DateCard from "./components/DateCard";
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
				items.push(doc.data());
			});
			setData(items);
			setLoading(false);
		}).catch(err=>{
			alert(err);
		});
	};

	useEffect(()=>{
		getData();
	},[]);

	if(loading) return(<div><h5>loading...</h5></div>);
	
	return(
		<div>
			<h3>CURRENT AFFAIRS</h3>
			<div>
				{data.map(d=><DateCard
					key={d.id}
					PostDate={d.Date.seconds}
					Image={d.Image}
					Name={d.Name}
					/>)}
			</div>
		</div>
	)
}

export default CurrentAffairs;
