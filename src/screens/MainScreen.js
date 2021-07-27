import React from 'react';
import Nav from './components/Nav';
import "./css/MainScreen.css";


function MainScreen(){
	return(
		<div>
			<Nav/>

			<div className="main-content">
				<video width="100%" AutoPlay loop>
					<source src="./assets/o-back.mp4" type="video/mp4"/>
				</video>
			</div>
			
		</div>
	)
}

export default MainScreen;
