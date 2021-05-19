import React from 'react';
import { Col, Button, Input } from 'reactstrap'

import '../common.css';
import './createRequest.css'

export default function CreateRequest(){
  return(
    <Col className="box createForm">
      <div className='createForm--flex'>
        <div className='createForm__heading'>Create request</div>
        <button className='button button--green'>Create</button>
      </div>
      <div className="createForm__input">
        <Input 
          placeholder='Title'
          type='text'
        />
      </div>
      <div>
        <textarea className="createForm__textarea">
          Add a description
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
    </Col>
  )
}