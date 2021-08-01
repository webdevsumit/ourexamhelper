import './App.css';
import MainScreen from './screens/MainScreen';
import Signup from './screens/Signup';
import Login from './screens/Login';
import CurrentAffairs from './screens/CurrentAffairs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    	<Router>
    		<Route path="/" exact >
    			<MainScreen/>
    		</Route>

    		<Route path="/login" exact >
    			<Login/>
    		</Route>
    		<Route path="/signup" exact >
    			<Signup/>
    		</Route>

    		<Route path="/current-affairs">
    			<CurrentAffairs/>
    		</Route>
    		
    	</Router>
    </div>
  );
}

export default App;
