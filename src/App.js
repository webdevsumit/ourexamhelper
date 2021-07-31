import './App.css';
import MainScreen from './screens/MainScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    	<Router>
    		<Route path="/" exact >
    			<MainScreen/>
    		</Route>
    	</Router>
    </div>
  );
}

export default App;
