import React from 'react';
import "./../css/DateCard.css"

function DateCard(props){
	const fDate = new Date(props.PostDate*1000);
	const date = fDate.getDate();
	const month = fDate.getMonth()+1;
	const year = fDate.getFullYear();
	return(
		<div className="date-card">
			<img src={props.Image} alt="back img"/>
			<h3>{props.Name}</h3>
			<p><em>{date+"/"+month+"/"+year}</em></p>
		</div>
	)
}

export default DateCard;
