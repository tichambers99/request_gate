import React from 'react';
import { Media } from 'reactstrap'

import './historyRequest.css';

export default function HistoryRequest(props){
  const { request } = props;
  return(
    <div className = "historyRequest">
      <Media >
        <Media left>
          <Media object src="https://findicons.com/files/icons/753/gnome_desktop/64/gnome_image_x_generic.png" height='32px' width='32px' alt="Generic placeholder image" />
        </Media>
        <Media body>
          <div><b>{request.author}</b></div>
          <h5>{request.name}</h5>
          <div className='date'>{request.date}</div>  
        </Media>
      </Media>
    </div>
  )
}