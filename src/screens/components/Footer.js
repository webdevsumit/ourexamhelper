import React from "react";
import "./../css/Footer.css";
import { Link } from 'react-router-dom';

function Footer(){
	return(
		<div className="footer-container">
			<div className="footer-flex">
				<div className="footer-flex-div">
						<h5>Contacts</h5>
						<a href="#">Mail</a><br/>
						<a href="#">LinkedIn</a><br/>
						<a href="#">Facebook</a><br/>
						<a href="#">Instagram</a><br/>
				</div>
				
				<div className="footer-flex-div">
						<h5>Pages</h5>
						<Link to="/current-affairs">Current Affairs</Link><br/>		
						<Link to="/most-rated-questions">Most Rated Questions</Link><br/>		
						<Link to="/previous-papers">Previous Papers</Link><br/>		
						<Link to="/sample-papers">Sample Papers</Link><br/>		
				</div>
			</div>
			<h6>&#169;copyright2021</h6>
		</div>
	)
}

export default Footer;
