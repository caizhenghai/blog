import React, { useEffect, useState } from 'react'
import './timeComponent.css'


const TimeComponent=()=>{
  const [time,setTime] = useState(new Date().toLocaleTimeString() );
  const tick=()=>{
    setTime(new Date().toLocaleTimeString())
  };

  useEffect(()=>{
    setInterval(tick,1000);
  },[time]);

  return (
    <div className='TimeComponent'>现在的时间是：{time}</div>
  );
};



export default TimeComponent