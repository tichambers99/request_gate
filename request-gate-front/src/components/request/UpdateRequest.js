import React, { useState, useEffect } from 'react';
import { Col, Modal } from 'reactstrap';
import { useParams, useRouteMatch, Link } from 'react-router-dom';

import axios from 'axios';

import warningImg from '../../icon/warning.png';
import tickImg from '../../icon/tick.png';
import '../common.css';
import './request.css'

export default function UpdateRequest(){
  const  { path, url }  = useRouteMatch();
  const [reqDetail, setReqDetail] = useState({})
  const { requestId } = useParams();

  const [modal, setModal] = useState(false);
  const [warningModal, settWarningModal] = useState(false);

  const warningToggle = () => settWarningModal(!modal);
  const toggle = () => setModal(!modal);

  useEffect(()=>{
    const fetchData = async() => {
      const res = await axios.get(`https://l1z9u.sse.codesandbox.io/requests?id=${requestId}`);
      setReqDetail(res.data[0]);
    }

    fetchData();
  }, [])

  const onHandleUpdate = () =>{
    axios.put(`https://l1z9u.sse.codesandbox.io/requests/${reqDetail.id}`, reqDetail).then(()=>{
      console.log('success');
      setModal(true);
    }
    )
  }

  const onHandleDelete = () =>{
    axios.delete(`https://l1z9u.sse.codesandbox.io/requests/${reqDetail.id}/`).then(()=>{
      console.log("success");
    }
    )

    warningToggle();
  }
  return(
    <Col className="box box_fix createForm">
      {typeof(reqDetail)!== 'undefined'&&
        <div>
          <Modal isOpen={warningModal} toggle={warningToggle}>
            <div className='box'>
              <div className="modal__content">
                <img src={warningImg} alt="tick" />
                <div className="modal__noti">Are you sure to delete?</div>
              </div>
              <div className="modal__action">
                <button className="button button--white" onClick={warningToggle}>Cancel</button>
                <Link to={`/request`}>
                  <button className="button button--white" onClick={onHandleDelete}>Ok</button>
                </Link>
              </div>
            </div>
          </Modal>
          <Modal isOpen={modal} toggle={toggle}>
            <div className='box'>
              <div className="modal__content">
                <img src={tickImg} alt="tick" />
                <div className="modal__noti">Update request success</div>
              </div>
              <div className="modal__action">
                <Link to={`/request/${reqDetail.id}`}>
                  <button className="button button--white" onClick={toggle}>Ok</button>
                </Link>
              </div>
            </div>
          </Modal>
          <div className='createForm--flex'>
            <div className='createForm__heading'>Update request</div>
            <div className='createForm__action'>
              <button
                className='button button--green'
                onClick={warningToggle}
              >
                Delete
              </button>
              <button
                className='button button--blue'
                onClick={onHandleUpdate}
              >
                Update
              </button>
            </div>
          </div>
          <div className="createForm__input">
            <input
              value={reqDetail.name} 
              placeholder='Title'
              type='text'
              onChange={(e)=>{setReqDetail({...reqDetail, name: e.target.value})}}
            />
          </div>
          <div className='box'>
            <div>
              <textarea
                value={reqDetail.content}
                onChange={(e)=>{setReqDetail({...reqDetail, content: e.target.value})}}
                className="createForm__textarea"
                placeholder="Add a description"
              >
              </textarea>
            </div>
            <div className="createForm__listSelect"> 
              <div className='select'>
                <label for="status">Status</label>
                <select id="status">
                  <option value="open">open</option>
                </select>
              </div>
              
              <div className='select'>
                <label for="category">Category</label>
                <select
                  id="category"
                  value={reqDetail.category}
                  onChange={(e)=>{setReqDetail({...reqDetail, category: e.target.value})}}
                >
                  <option>Equipment</option>
                  <option>Marketing</option>
                  <option>Coding</option>
                  <option>Finance</option>
                </select>
              </div>

              <div className='select'>
                <label for="assign">Assign</label>
                <select
                  id="assign"
                  value={reqDetail.assigner}
                  onChange={(e)=>{setReqDetail({...reqDetail, assigner: e.target.value})}}
                >
                  <option>Jack</option>
                  <option>Tom</option>
                  <option>Jerry</option>
                  <option>Massino</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      }
    </Col>
  )
}