import React from 'react';
import { Col} from 'reactstrap';

import '../common.css';
import './request.css';
import './requestDetail.css';

export default function RequestDetail(){
  const request = {
    id: 1,
    name: "Request computer's monitor",
    content: "nothing to request",
    author: "Holding",
    date: "10/5/2021",
    category: "category name",
    assigner: "calum chambers",
    status: "process"
  }
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
  return(
    <Col className="box box_fix requestDetails">
      <div className="infor">
        <div className='infor__heading'>
          <div className='heading'>{request.name}</div>
          <button className='button button--blue'>{request.status}</button>
        </div>
        <div className="infor_author">
          <img
            className='avatar avatar--64'
            src='https://sotaydoanhtri.com/wp-content/uploads/2019/11/Balsamiq-Mockups.png'
            alt="avatar"
          />
          <div>
            <div><b>{request.author}</b></div>
            <div className="date">Created at {request.date}</div>
          </div> 
        </div>
        <div className='request_content'>
          {request.content}
        </div>
        <div className="infor__category">
          <div>
            Category:  {request.category}
          </div>
          <div>
            Assign:  {request.assigner}
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
    </Col>
  )
}