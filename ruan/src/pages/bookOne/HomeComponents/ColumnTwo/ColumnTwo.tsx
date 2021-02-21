import React from 'react'
import './ColumnTwo.css'
import { Menu,Button, DatePicker, version } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";
import { Link } from 'react-router-dom';

const {SubMenu}=Menu;

const ColumnTwo=()=>{
  return (
    <div className='HomeColumnTwo'  >
      <Menu mode='inline' defaultOpenKeys={['sub1']} >
        <SubMenu key='sub1' icon={<AppstoreOutlined />} title='第一章'>
          <Menu.Item> <a href='#/Character1'>解读1</a> </Menu.Item>
          <Menu.Item>解读2</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='第二章'>
          <Menu.Item>解读3</Menu.Item>
          <Menu.Item>解读4</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default ColumnTwo