import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import "./css/MainScreen.css";
import { Link } from 'react-router-dom';


function MainScreen(){
	return(
		<div>
			<Nav/>

			<div className="main-content">
			
				<img src="./assets/o-back-img.png" alt="background" width="100%"/>
				
				<div className="btn-group">
					<Link to="/login"><button>LOGIN</button></Link>
					<Link to="/signup"><button>SIGNUP</button></Link>
				</div>

				<hr/>
				
				<div className="main-content">
					<h2>STUDY MATERIAL</h2>
					<div className="main-page-links">
					
						<Link to="/current-affairs">
							<img className="ca-icon" src="./assets/ca-icon.png" alt="icon" />
							<h6>Current Affairs</h6>
						</Link>

						<Link to="/most-rated-questions">
							<img className="ca-icon" src="./assets/most-rated-q.jpg" alt="icon" />
							<h6>Most Rated Questions</h6>
						</Link>
	
						<Link to="/sample-papers">
							<img className="ca-icon" src="./assets/Sample-papers.png" alt="icon" />
							<h6>Sample Papers</h6>
						</Link>
	
						<Link to="/top-5-last-minute">
							<img className="ca-icon" src="./assets/Top-5.png" alt="icon" />
							<h6>5 Last Minute Questions</h6>
						</Link>
	
						<Link to="/previous-papers">
							<img className="ca-icon" src="./assets/Previous-papers.png" alt="icon" />
							<h6>Previous Year papers</h6>
						</Link>
	
						<Link to="/contact-us">
							<img className="ca-icon" src="./assets/airplane-icon.png" alt="icon" />
							<h6>Contact us to add more</h6>
						</Link>
						
					</div>
				</div>
				
			</div>
			<Footer/>
		</div>
	)
}

export default MainScreen;
