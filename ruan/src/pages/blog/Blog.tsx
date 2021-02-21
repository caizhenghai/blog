import * as React from 'react';
import './Blog.css'
import Header from './HomeComponent/Header/Header';
import ColumnOne from './HomeComponent/main-content/ColumnOne';
import ColumnTwo from './HomeComponent/main-content/ColumnTwo';

export interface IBlogProps {
  id:number;
}

export default function Blog (props: IBlogProps) {

  return (
    <div className='blog-home'>
      <div className='blog-container'>
        <Header />
        <ColumnOne />
        <ColumnTwo />
      </div>
    </div>
  );
}
