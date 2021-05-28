import { useState, useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col, Row } from 'reactstrap';

import Home from '../home/Home';
import CreateRequest from '../request/CreateRequest';
import RequestDetail from '../request/RequestDetail';
import SideBar from '../sidebar/Sidebar';
import Login from '../login/Login';

function ProtectedRoute() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div className='main'>
        <Row>
          <Col md='1'>
          <SideBar />
          </Col>
          <Col md="11">
            <Switch>
              <Route path="/request-detail">
                <RequestDetail />
              </Route>
              <Route path="/request">
                <Home />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProtectedRoute;