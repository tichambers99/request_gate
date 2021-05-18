import React from 'react';
import ListRequests from './ListRequests';
import HistoryRequestList from './HistoryRequestList';

import { Row, Col } from 'reactstrap';

export default function Home(){
  return(
    <div>
      <Row>
        <Col md="9">
          <ListRequests />
        </Col>
        <Col md="3">
          <HistoryRequestList />
        </Col>
      </Row> 
    </div>
  )
}