import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ListRequests from './ListRequests';
import HistoryRequestList from './HistoryRequestList';

import RequestDetail from '../request/RequestDetail';
import UpdateRquest from '../request/UpdateRequest';
import CreateRequest from '../request/CreateRequest';

import { Row, Col } from 'reactstrap';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

export default function Home(){
  const [requests, setRequests] = useState([]);
  const  { path, url }  = useRouteMatch();

  console.log(
    path, url
  )

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get('https://l1z9u.sse.codesandbox.io/requests');
      setRequests(res.data);
    }

    fetchData();
  }, [])

  return(
    <div>
      <Switch>
        <Route exact path={`${path}`}>
          <Row>
            <Col md="9">
              <ListRequests 
                requests = {requests}
                url = {url}
              />
            </Col>
            <Col md="3">
              <HistoryRequestList />
            </Col>
          </Row> 
        </Route>
        <Route path={`${path}/create-request`}>
          <CreateRequest />
        </Route>
        <Route path={`${path}/:requestId/edit`}>
          <UpdateRquest />
        </Route>
        <Route path={`${path}/:requestId`}>
          <RequestDetail />
        </Route>
      </Switch>
    </div>
  )
}