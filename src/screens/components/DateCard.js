import React,{useState} from 'react';
import "./../css/DateCard.css"


function DateCard(props){
	const fDate = props.PostDate.split('-');
	const date = fDate[2];
	const month = fDate[1];
	const year = fDate[0];
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
			<p><em>{monthNames[month-1]+" "+year}</em></p>
			<img src={props.Image} alt="back img"/>
			<h6>{props.Name}</h6>
		</div>
	)
}

export default DateCard;
