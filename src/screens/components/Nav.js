import React,{ useState } from 'react';
import './../css/Nav.css';


function Nav(){
	const [menu, setMenu] = useState(false);
	return(
		<nav>
			<div className='logo-div'>
				<img className='logo' src="./assets/o-logo.png" alt='logo'/>
				<h4 className="nav-head">Our Exam Helper</h4>
			</div>
			
			<div>
				{!menu?
				<div className="nav-menu" onClick={()=>setMenu(true)}>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
					<div className="menu-line"></div>
				</div>
				:
				<div className="menu-content" onClick={()=>setMenu(false)}>
					<h2 className="nav-menu-cross">X</h2>
					<div className="menu-items">
						<a className="links" href="#">HOME</a><br/>
						<a className="links" href="#">CURRENT AFFAIRS</a><br/>
						<a className="links" href="#">LOGIN</a><br/>
						<a className="links" href="#">SIGNUP</a><br/>
					</div>
				</div>
				}
				
			</div>
		</nav>
	)
}

export default Nav;
