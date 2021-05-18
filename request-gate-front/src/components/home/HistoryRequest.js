import React from 'react';
import { Media } from 'reactstrap'

import './historyRequest.css';

export default function HistoryRequest(props){
  const { request } = props;
  return(
    <div className = "historyRequest">
      <Media >
        <Media left>
          <Media object src="https://findicons.com/files/icons/753/gnome_desktop/64/gnome_image_x_generic.png" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <h5>{request.author}</h5>
          <Media heading>
            {request.name}
          </Media>
          {request.date}
        </Media>
      </Media>
    </div>
  )
}