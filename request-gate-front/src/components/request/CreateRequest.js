import React from 'react';

import '../common.css';

import { Col, Button, Input } from 'reactstrap'
export default function Sidebar(){
  return(
    <Col className="box">
      <div>
        <div className='box__heading'>Create request</div>
        <Button>Create</Button>
      </div>
      <div>
        <Input 
          placeholder='Title'
          type='text'
        />
      </div>
      <div>
        <textarea>
          Add a description
        </textarea>

        <label for="status">Status</label>
        <select id="status">
          <option>open</option>
        </select>

        <label for="category">Category</label>
        <select id="category">
          <option>Equipment</option>
          <option>Marketing</option>
          <option>Coding</option>
          <option>Finance</option>
        </select>

        <label for="assign">Assign</label>
        <select id="assign">
          <option>Jack</option>
          <option>Tom</option>
          <option>Jerry</option>
          <option>Massino</option>
        </select>
      </div>
    </Col>
  )
}