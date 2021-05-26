import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import { useRouteMatch, useParams, Link, Switch, Route } from 'react-router-dom';

import UpdateRequest from './UpdateRequest'
import '../common.css';
import './request.css';
import './requestDetail.css';
import axios from 'axios';

export default function RequestDetail(){
  const  { path, url }  = useRouteMatch();
  console.log(url);
  const [reqDetail, setReqDetail] = useState({})
  const comment = [
    {
      id: 1,
      author: "Calum Chambers",
      date: "30/07/2021",
      content: "This request should be requested by anthor people"
    },
    {
      id: 2,
      author: "Rob Holding",
      date: "30/09/2021",
      content: "I like this request"
    },
  ]
  const { requestId } = useParams();
  

  useEffect(()=>{
    const fetchData = async() => {
      const res = await axios.get(`https://l1z9u.sse.codesandbox.io/requests?id=${requestId}`);
      setReqDetail(res.data[0]);
    }

    fetchData();
  }, [])

  
  return(
    <Col className="box box_fix requestDetails">
      {typeof(reqDetail) !== "undefined" && 
      <div>
        <div className="infor">
          <div className='infor__heading'>
            <div className='heading'>{reqDetail.name}</div>
            <div className='infor__action'>
              <button className='button button--blue'>{reqDetail.status}</button>
              <Link to={`${url}/edit`}><button className='button button--green'>Edit</button></Link>
            </div>
          </div>
          <div className="infor_author">
            <img
              className='avatar avatar--64'
              src='https://sotaydoanhtri.com/wp-content/uploads/2019/11/Balsamiq-Mockups.png'
              alt="avatar"
            />
            <div>
              <div><b>{reqDetail.author}</b></div>
              <div className="date">Created at {reqDetail.date}</div>
            </div> 
          </div>
          <div className='request_content'>
            {reqDetail.content}
          </div>
          <div className="infor__category">
            <div>
              Category:  {reqDetail.category}
            </div>
            <div>
              Assign:  {reqDetail.assigner}
            </div>
          </div>
        </div>
        <div className="comment">
        <h6>Comment ({comment.length})</h6>
        <div className='box box__comment'>
          {comment.length === 0 && <div>There are no commets yet</div>}
          {comment.length >= 0 && 
            comment.map(cmt => (
              <div>
                <div className="infor_author">
                  <img
                    className='avatar avatar--32'
                    src='https://sotaydoanhtri.com/wp-content/uploads/2019/11/Balsamiq-Mockups.png'
                    alt="avatar"
                  />
                  <div>
                    <div><b>{cmt.author}</b></div>
                    <div className="date">Created at {cmt.date}</div>
                  </div> 
                </div>
                <div>{cmt.content}</div>
              </div>
            ))
          }
        </div>
        <input type="text" placeholder="Write a comment"/>
        </div>
      </div>}
    </Col>
  )
}