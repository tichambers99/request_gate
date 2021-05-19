import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

import '../common.css'
export default function SideBar(){
  return(
    <div className='box'>
      <ul className="box__list">
        <li><a href='#'>Page 1</a></li>
        <li><a href='#'>Page 2</a></li>
        <li><a href='#'>Page 3</a></li>
      </ul>
    </div>
  )
}