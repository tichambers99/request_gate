import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

import '../common.css';
import './listRequests.css';

export default (props) => {
  var [requests, setRequests] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get('https://l1z9u.sse.codesandbox.io/requests');
      setRequests(res.data);
      console.log(res.data);
    }

    fetchData();
  }, [])

  return (
    <div className='listRequests box'>
      <div className="box__heading">List requests</div>
      <Table id="listRequests">
      <thead>
        <tr>
          <th>Name Request</th>
          <th>Content Request</th>
          <th>Author Create</th>
          <th>Date Create</th>
          <th>Category</th>
          <th>Assigner</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {typeof(requests)!=='undefined' && requests.map(req => (
          <tr>
            <td>{req.name}</td>
            <td>{req.content}</td>
            <td>{req.author}</td>
            <td>{req.date}</td>
            <td>{req.category}</td>
            <td>{req.assigner}</td>
            <td>{req.status}</td>
        </tr>
        ))}
        
      </tbody>
    </Table>
    </div>
  );
};