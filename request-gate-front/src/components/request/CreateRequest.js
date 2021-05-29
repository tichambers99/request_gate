
import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';

import AuthContext from "../contexts/AuthContext";

import tickImg from '../../icon/tick.png';
import errorImg from '../../icon/error.png';
import '../common.css';
import './request.css'

export default function CreateRequest(){
  const auth = useContext(AuthContext);
  // test axios.post
  const [request, setRequest] = useState({
      name: "",
      author_id: auth.user.id,
      content: "",
      author: auth.user.name,
      date: "",
      category: "",
      assigner: "",
      status: "pending"
  });

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  }
  const postRequest = () => {
    //format date to "DD/MM/YYYY"
    const date = moment(new Date()).format("DD/MM/YYYY");
    setRequest({...request, date: date});
  }

  useEffect(()=>{
    if(request.date!==''){
      axios.post('https://l1z9u.sse.codesandbox.io/requests', request).then(()=>{
      console.log(request);
      console.log("Success");
      });

    setModal(true);
    }
  }, [request.date])

  return(
    <Col className="box box_fix createForm">
      <div className='createForm--flex'>
        <div className='createForm__heading'>Create request</div>
        <button className='button button--green'>Create</button>
      </div>
      <div className="createForm__input">
        <input 
          placeholder='Title'
          type='text'
        />
      </div>
      <div className='box'>
        <div>
          <textarea 
            className="createForm__textarea"
            placeholder="Add a description"
          >
          </textarea>
        </div>
        <div className="createForm__listSelect"> 
          <div className='select'>
            <label for="status">Status</label>
            <select id="status">
              <option>open</option>
            </select>
          </div>
          
          <div className='select'>
            <label for="category">Category</label>
            <select id="category">
              <option>Equipment</option>
              <option>Marketing</option>
              <option>Coding</option>
              <option>Finance</option>
            </select>
          </div>

          <div className='select'>
            <label for="assign">Assign</label>
            <select id="assign">
              <option>Jack</option>
              <option>Tom</option>
              <option>Jerry</option>
              <option>Massino</option>
            </select>
          </div>
        </div>
      </div>
    </Col>
  )
}