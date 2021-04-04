import './App.css';
import Navbar from './component/Navbar.js';
import Lapor from './component/Lapor.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/action">
          <Lapor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
