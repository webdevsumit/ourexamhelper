import './App.css';
import MainScreen from './screens/MainScreen';
import Signup from './screens/Signup';
import Login from './screens/Login';
import CurrentAffairs from './screens/CurrentAffairs';
import MostRatedQuestions from './screens/MostRatedQuestions';
import SamplePapers from './screens/SamplePapers';
import Top5LastMinute from './screens/Top5LastMinute';
import PreviousPapers from './screens/PreviousPapers';
import Admin from './screens/Admin';


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

    		<Route path="/most-rated-questions" exact >
    			<MostRatedQuestions/>
    		</Route>
    		<Route path="/sample-papers" exact >
    			<SamplePapers/>
    		</Route>
    		<Route path="/top-5-last-minute" exact >
    			<Top5LastMinute/>
    		</Route>
    		<Route path="/previous-papers" exact >
    			<PreviousPapers/>
    		</Route>

    		<Route path="/admin" exact >
    		    <Admin/>
    		</Route>
    		
    	</Router>
    </div>
  );
}

export default App;
