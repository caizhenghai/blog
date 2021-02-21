import * as React from 'react';
import './Header.css'
import {BugTwoTone} from '@ant-design/icons'
import {Input} from 'antd'

const {Search} = Input;

export interface IHeaderProps {
}

export default function Header (props: IHeaderProps) {
  return (
    <div className='blog-header'>
      <h1>czh的网络日志</h1>
      
      <div className='search'>
        <Search placeholder='input search text' enterButton='Search' size="middle" />
      </div>
      <div className='icon'>
        <BugTwoTone style={{fontSize:'20px'}} />
      </div>
      
    </div>
  );
}
