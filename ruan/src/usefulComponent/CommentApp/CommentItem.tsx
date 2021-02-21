import React, { FC, ReactElement } from 'react'
import CommentApp, { Icomment } from './CommentApp';
import './css/CommentItem.css'
import imgURL from './pic1.jpg'

interface IProps{
  comment:Icomment;
}

const CommentItem:FC<IProps>=({
  comment
}):ReactElement =>{
  return(
    // <div className='comments'>
    //   <article className='comment'>
    //     <a className='comment-img'>
    //       <img src={imgURL} />
    //     </a>
    //     <div className='comment-body'>
    //       <div className='text'>
    //         <p>{comment.content}</p>
    //       </div>
    //       <p className='attribution'>by<a href='#non'>{comment.name}</a>at {comment.time}</p>
    //     </div>
    //   </article>
    // </div>

    <div className='ItemWrapper'>
      <a className='img'>
        <img src={imgURL} width='50px' height='50px'  />
      </a>
      <div className='CommentItem'>
        <span className='name'>{comment.name}</span>
        <span className='time'> · {comment.time}</span>
        <article>{comment.content}</article>
      </div>
      
    </div>
  );
}



export default CommentItem;