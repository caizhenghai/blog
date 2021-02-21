import React, { FC, ReactElement, useRef } from 'react'
import { Icomment } from './CommentApp';
import './css/CommentInput.css'

interface IProps{
  addComments:(comment:Icomment)=> void;
}

const CommentInputs :FC<IProps> =({
  addComments
}):ReactElement  =>{
  const nameRef=useRef<HTMLInputElement>(null);
  const contentRef=useRef<HTMLTextAreaElement>(null);

  const addItem=():void=>{
    const name:string=nameRef.current!.value.trim();
    const content:string=contentRef.current!.value.trim();
    const time:string=new Date().toLocaleTimeString();

    addComments({
      name:name,
      time:time,
      content:content
    });

  }


  return (
  <div>
    <textarea ref={contentRef} className='comment_in' placeholder='写下你的评论' />
    <div >
      <input id='name' ref={nameRef} placeholder='name'/>
      <button onClick={addItem} className='submit_btn'>提交</button>
    </div>
  </div>
  );
}

export default CommentInputs;