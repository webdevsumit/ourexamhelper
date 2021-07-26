import './App.css';
import MainScreen from './screens/MainScreen';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    	<Router>
    		<MainScreen/>
    	</Router>
    </div>
  );
}

export default App;
