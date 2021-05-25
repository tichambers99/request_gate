import React from 'react'
import './sidebar.css';

import '../common.css'
export default function SideBar(){
  return(
    <div className='box box_fix sidebar'>
      <ul className="box__list">
        <li><a href='#'>Request</a></li>
        <li><a href='#'>User</a></li>
        <li><a href='#'>Log out</a></li>
      </ul>
    </div>
  )
}