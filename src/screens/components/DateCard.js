import React,{useState} from 'react';
import "./../css/DateCard.css"


function DateCard(props){
	const fDate = new Date(props.PostDate*1000);
	const date = fDate.getDate();
	const month = fDate.getMonth();
	const year = fDate.getFullYear();
	const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	
	
	return(
		<div className="date-card" onClick={
			()=>props.click(
				props.id,
				props.Name,
				props.Image,
				date+' '+monthNames[month]+' '+year
			)
		}>
			<p className="day">{date}</p>
			<p><em>{monthNames[month]+" "+year}</em></p>
			<img src={props.Image} alt="back img"/>
			<h6>{props.Name}</h6>
		</div>
	)
}

export default DateCard;
