import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import imgURL from './bac1.jpeg'

const Home = () => {
  return (
    <div className='Home'>
      <div className='HomeBar'>
        <div className='HomeHeader'> 蔡正海的个人日志 </div>
        <div className='HomeEnglishHeader'> caizhenghai de gerenrizhi  </div>
        <div className='HomeLink'><Link className='Button' to="/Blog" >网络日志（Blog）</Link></div>
        <div className='HomeLink'><Link className='Button' to="/BookOne">BookOne（未来世界的幸存者）</Link></div>
        <div className='HomeLink'><Link className='Button' to="/BookOne">BookTwo（前方的路）</Link></div>
        <div className='contact'>contact | czh.com </div>
      </div>
    </div>
  );
}




export default Home;