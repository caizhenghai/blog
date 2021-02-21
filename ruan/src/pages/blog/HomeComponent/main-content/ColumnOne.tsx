import * as React from 'react';
import './ColumnOne.css'
export interface IColumnOneProps {
}

export default function ColumnOne (props: IColumnOneProps) {
  return (
    <div className='blog-c1'>
      <div className='c1-inner'>
        <div className='c1-entry'>
          <div className='header'>
            <h2>科技爱好者周刊（第 144 期）：提高收入的根本途径</h2>
            <p>分类：周刊</p>
          </div>
          <div className='content'>
            <div><p>这里记录每周值得分享的科技内容，周五发布。</p></div>
            <div><p><a>继续阅读全文 》</a></p></div>
          </div>
          <div className='footer'>
            <p>2021年1月29日 08:33 | 留言（30）</p>
          </div>
        </div>

        <div className='homepage'>
          <h3>最新文章</h3>
          <ul className='ul'>
            <li>2021年01月27日 » <a>异或运算 XOR 教程</a> </li>
            <li>2021年01月22日 » <a>科技爱好者周刊（第 143 期）：世界尽头与冷酷仙境</a></li>
            <li>2021年01月20日 » <a>剪贴板操作 Clipboard API 教程</a> </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
