import React, { useState, useEffect, useContext } from 'react';
import { Col, Modal } from 'reactstrap';
import { useParams, useRouteMatch, Link } from 'react-router-dom';

import axios from 'axios';

import AuthContext from '../contexts/AuthContext';
import warningImg from '../../icon/warning.png';
import tickImg from '../../icon/tick.png';
import '../common.css';
import './request.css'

export default function UpdateRequest(){
  const { user } = useContext(AuthContext);
  const  { path, url }  = useRouteMatch();
  const [reqDetail, setReqDetail] = useState({})
  const { requestId } = useParams();

  const [modal, setModal] = useState(false);
  const [warningModal, settWarningModal] = useState(false);
  const [ readOnly, setReadOnly ] = useState(false);

  const warningToggle = () => settWarningModal(!modal);
  const toggle = () => setModal(!modal);

  useEffect(()=>{
    const fetchData = async() => {
      const res = await axios.get(`https://l1z9u.sse.codesandbox.io/requests?id=${requestId}`);
      setReqDetail(res.data[0]);
    }

    fetchData();
  }, [])

  useEffect(()=>{
    if(reqDetail && reqDetail.status === 'close'){
      setReadOnly(true);
    }
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
            {reqDetail.status !== 'close' && 
              <div className='createForm__action'>
                <button
                  className='button button--red'
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
            }
            {reqDetail.status === 'close' && 
              <div>This request is closed</div>
            }
          </div>
          <div className="createForm__input">
            <input
              readOnly={readOnly}
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
                readOnly={readOnly}
                onChange={(e)=>{setReqDetail({...reqDetail, content: e.target.value})}}
                className="createForm__textarea"
                placeholder="Add a description"
              >
              </textarea>
            </div>
            <div className="createForm__listSelect"> 
              <div className='select'>
                <label for="status">Status</label>
                {user.role === 'admin' &&
                  <select id="status" value={reqDetail.status}>
                    {console.log(reqDetail)}
                    <option value="open">open</option>
                    <option value="progress">progress</option>
                    <option value="close">close</option>
                  </select>
                }
                {user.role === 'user'&&
                  <span>{reqDetail.status}</span>
                }
                {console.log(user)}
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