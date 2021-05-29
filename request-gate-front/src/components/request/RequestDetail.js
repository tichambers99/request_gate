import React, { useEffect, useState, useContext } from 'react';
import moment from 'moment';
import { Col } from 'reactstrap';
import { useParams } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext'
import '../common.css';
import './request.css';
import './requestDetail.css';
import axios from 'axios';

export default function RequestDetail(){

  const auth = useContext(AuthContext);
  const  { path, url }  = useRouteMatch();

  const [reqDetail, setReqDetail] = useState({});
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState({});
  const { requestId } = useParams();
  
  useEffect(()=>{
    const fetchData = async() => {
      const reqRes = await axios.get(`https://l1z9u.sse.codesandbox.io/requests?id=${requestId}`);
      const cmtRes = await axios.get(`https://l1z9u.sse.codesandbox.io/comment?request_id=${requestId}`);
      setReqDetail(reqRes.data[0]);
      setComment(cmtRes.data);
    }

    fetchData();
  }, [])

  // useEffect(()=>{
  //   if(newComment.content!=='undefined'){
  //     console.log('post');
  //     axios.post(`https://l1z9u.sse.codesandbox.io/comment`, newComment)
  //   }
  // }, [comment])

  const onHandleChange = (e) => {
  }

  //create new comment by pressing enter key
  // enter charCode = 13
  const onKeyUp = (e) => {
    if(e.key === 'Enter'){
      if(e.target.value!==''){
        let date = moment(new Date()).format("DD/MM/YYYY");

        setNewComment({
          content: e.target.value.trim(),
          request_id: parseInt(requestId),
          date: date,
          author: auth.user.name
        });
        setComment([
          ...comment,
          {
            content: e.target.value.trim(),
            request_id: parseInt(requestId),
            date: date,
            author: auth.user.name
          }
        ]);
      }
    }
  }
  
  return(
    <Col className="box box_fix requestDetails">
      {typeof(reqDetail) !== "undefined" && 
      <div>
        <div className="infor">
          <div className='infor__heading'>
            <div className='heading'>{reqDetail.name}</div>
            <button className='button button--blue'>{reqDetail.status}</button>
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
        <input
          onChange={(e)=>onHandleChange}
          onKeyUp={onKeyUp}
          type="text"
          placeholder="Write a comment"/>
        </div>
      </div>}
    </Col>
  )
}