import React from 'react'
import './sidebar.css';

import '../common.css'
export default function SideBar(){
  return(
    <div className='box box_fix sidebar'>
      <ul className="box__list">
        <li><a href='#'>Page 1</a></li>
        <li><a href='#'>Page 2</a></li>
        <li><a href='#'>Page 3</a></li>
      </ul>
    </div>
  )
}