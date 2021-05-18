import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/Home';
import CreateRequest from './components/request/CreateRequest';

function App() {
  return (
    <Router>
      <div className="App">
        
      </div>
      <Switch>
        <Route path="/create-request">
          <CreateRequest />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
