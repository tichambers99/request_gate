import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import HistoryRequest from './HistoryRequest';
import Pagination from '../pagination/Pagination';

import '../common.css';

export default function HistoryRequestList(){
  const [historyReqs, setHistoryReqs] = useState([]);


  useEffect(()=>{
    const fetchData = async () =>{
      const res = await Axios.get('https://l1z9u.sse.codesandbox.io/history');
      setHistoryReqs(res.data);
      console.log(res.data);
    }
    fetchData();
  }, [])
  return(
    <div className="historyRequestList box box_fix">
      <div className="box__heading">History requests</div>
      {
        typeof(historyReqs)!=='undefined' &&
        historyReqs.map(
          historyReq => <HistoryRequest request={historyReq}/>
        )
      }
      <Pagination />
    </div>
  )
}