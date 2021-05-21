import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col, Row, Container } from 'reactstrap';

import Home from './components/home/Home';
import CreateRequest from './components/request/CreateRequest';
import SideBar from './components/sidebar/Sidebar';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Container className='container'>
          <Row>
            <Col md='2'>
            <SideBar />
            </Col>
            <Col md="10">
              <Switch>
                <Route path="/create-request">
                  <CreateRequest />
                </Route>
                <Route path="/Login">
                  <Login />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
