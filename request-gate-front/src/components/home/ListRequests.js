import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table, Modal } from 'reactstrap';

import Pagination from '../pagination/Pagination';

import '../common.css';
import './listRequests.css';

export default (props) => {
  var [requests, setRequests] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get('https://l1z9u.sse.codesandbox.io/requests');
      setRequests(res.data);
      console.log(res.data);
    }

    fetchData();
  }, [])

  return (
    <div className='listRequests box box_fix'>
      <div className="box__heading">List requests</div>
      <button
        className="button button--white button__filter"
        onClick={toggle}  
      >Filter options</button>
      <Modal isOpen={modal} className="modal__filter">
        <div className="box">
          <div className='filter'>
            <div className='item'>
              <label>Name request</label>
              <input type="text"/>
            </div>
            <div className='item'>
              <label>Content</label>
              <input type="text"/>
            </div>
            <div className='item'>
              <label>Date create</label>
              <input type="date"/>
            </div>
            <div className='item'>
              <label for="status">Status</label>
              <select id="status">
                <option disabled selected value>Select status</option>
                <option>Process</option>
                <option>Pending</option>
                <option>Approve</option>
                <option>Reject</option>
              </select>
            </div >
            <div className='item'>
              <label for="author">Author</label>
              <select id="author">
                <option disabled selected value>Select author</option>
                <option>Rob Holding</option>
                <option>Calum Chambers</option>
                <option>Jack</option>
                <option>Jerry</option>
                <option>Tom</option>
              </select>
            </div>
            <div className='item'>
              <label for="assign">Assign</label>
              <select id="assign">
                <option disabled selected value>Select assign</option>
                <option>Rob Holding</option>
                <option>Calum Chambers</option>
                <option>Jack</option>
                <option>Jerry</option>
                <option>Tom</option>
              </select>
            </div>
            <div className='item'>
              <label for="category">Category</label>
              <select id="category">
                <option disabled selected value>Select Category</option>
                <option>Equipment</option>
                <option>Marketing</option>
                <option>Coding</option>
                <option>Finance</option>
              </select>
            </div>
            
          </div>
          <div className="modal__action">
            <button className="button button--white" onClick={toggle}>Clear</button>
            <button className="button button--white" onClick={toggle}>Filter</button>
          </div>
        </div>
      </Modal>
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
    <Pagination />
    </div>
  );
};