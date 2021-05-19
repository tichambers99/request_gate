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

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Row>
            <Col md='2'>
            <SideBar />
            </Col>
            <Col md="10">
              <Switch>
                <Route path="/create-request">
                  <CreateRequest />
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
