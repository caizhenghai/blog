import React, { FC, ReactElement } from 'react'
import { Icomment } from './CommentApp'
import CommentItem from './CommentItem'

interface IProps{
  comments:Icomment[];
}

const CommentLists:FC<IProps> =({
  comments
}):ReactElement =>{
  
  const lists=comments.map(
    (comment:Icomment) => {
      return (
        <div>
          <CommentItem comment={comment} />
        </div>
      );
    }
  );

  return (
    <div>
      {lists}
    </div>
  );
}

export default CommentLists;