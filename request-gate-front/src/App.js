import { useState, useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Col, Row } from 'reactstrap';

import ProtectedRoute from './components/routing/ProtectedRoute';
import PrivateRoute from './components/routing/PrivateRoute';
import Login from './components/login/Login';
import { AuthProvider } from './components/contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
          <div className="App">
            <div className='mainContainer'>
              <Switch>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/request">
                  <ProtectedRoute />
                </PrivateRoute>
              </Switch>
            </div>
          </div>
      </Router>
    </AuthProvider>
  );
}

export default App;