import React, { FC, ReactElement, useState } from 'react'
import CommentInputs from './CommentInput'
import CommentLists from './CommentList'
import './css/Comment.css'

export interface Icomment {
  name:string;
  time:string;
  content:string;
}

const CommentApp:FC =():ReactElement =>{
  const [comments,setComments]=useState<Icomment[]>([{
    name:'张三',
    time:new Date().toLocaleTimeString(),
    content:'当时，我在《财新周刊》有一个专栏，就把一些想法写在里面，每个月一篇，一共有20几篇。这本书就是专栏的结集，再加上一些以前的旧文（全在第三章）。世界正在猛烈变化，旧的模式完全行不通了。我希望这本书，能让读者意识到洪水就在不远处，从而早早准备出'
  }]);

  const addComments=(comment:Icomment)=>{
    setComments([...comments,comment]);
  }


  return (
    <div className='wrapper'>
      <h3>说出你的话｜｜ 当前回复数：{comments.length}</h3>
      <CommentInputs addComments={addComments} />
      <CommentLists comments={comments}/>
      <p>以上是所有回复！</p>
    </div>
  );
}

export default CommentApp;