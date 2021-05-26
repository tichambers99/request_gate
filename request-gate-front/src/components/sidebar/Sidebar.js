import React from 'react'
import { Link } from 'react-router-dom';

import './sidebar.css';
import '../common.css'
export default function SideBar(){
  return(
    <div className='box box_fix sidebar'>
      <ul className="box__list">
        <li><Link to='/request'>Request</Link></li>
        <li><Link to='#'>User</Link></li>
        <li><Link to='#'>Log out</Link></li>
      </ul>
    </div>
  )
}