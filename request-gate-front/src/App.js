import { useState, useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col, Row } from 'reactstrap';

import Home from './components/home/Home';
import CreateRequest from './components/request/CreateRequest';
import RequestDetail from './components/request/RequestDetail';
import SideBar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import CreateUser from './components/admin/CreateUser';
import { UserProvider } from './components/contexts/UserContext';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <UserProvider>
    <Router>
      {isLogin === false && <Login />}
      {isLogin === true && 
        <div className="App">
          <div className='main'>
            <Row>
              <Col md='1'>
              <SideBar />
              </Col>
              <Col md="11">
                <Switch>
                  <Route path="/create-request">
                    <CreateRequest />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
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
      }
    </Router>
    </UserProvider>
  );
}

export default App;
