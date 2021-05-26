import React from 'react';

import '../common.css';
export default function Pagination(){
  return(
    <div className='pagination'>
      <button className="button button--white">&lsaquo;</button>
      <button className="button button--white">1</button>
      <button className="button button--white">2</button>
      <button className="button button--white">3</button>
      <button className="button button--white">&rsaquo;</button>
    </div>
  )
}