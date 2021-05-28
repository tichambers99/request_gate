import React from 'react'
import { Link } from 'react-router-dom';

import './sidebar.css';
import '../common.css'
export default function SideBar(){
  return(
    <div className='box box_fix sidebar'>
      <ul className="box__list">
        <li><Link className='link' to='/request' >Request</Link></li>
        <li><Link className='link' to='/user' >User</Link></li>
        <li><Link className='link' to='#' >Log out</Link></li>
      </ul>
    </div>
  )
}