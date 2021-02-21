import * as React from "react";
import "./ColumnTwo.css";
import { Tooltip } from "antd";

export interface IColumnTwoProps {}

export default function ColumnTwo(props: IColumnTwoProps) {
  return (
    <div className="blog-c2">
      <div className="c2-inner">
        <div className="c2-comment">
          <h2>最新留言</h2>
          <div className="content-list">
            <ul>
              <li>
                <Tooltip title="放假开始减肥了卡解放dsds了卡解放了空间阿斯利康房间看辣椒粉">
                  <span>jufftine</span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="放假开始减fsfsa肥了卡解放了卡解放了空间阿斯利康房间看辣椒粉">
                  <span>jony</span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="放假开始减肥了卡解放了卡解放了空间阿fsfs斯利康房间看辣椒粉">
                  <span>tim</span>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="放假开始减肥了卡解放了卡解放了空间阿斯利康房间看辣椒粉">
                  <span>jack</span>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
        <div className="c2-about">
          <h2>关于</h2>
          <div className="content-list">
            <ul>
              <li>文章:8080</li>
              <li>留言:60036 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
