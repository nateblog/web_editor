import React, { Component } from 'react';
import './style.css';
import Tools from './tools.js';
import {
  drag
} from '../../methods.js';

class ToolDrawer extends Component {
  render() {
    const { onStartDrag, onClickStart, parentProp } = this.props;
    let self = parentProp;
    return (
      <div className="tool_drawer_wrapper">
      {
        Tools.map((item, index) => (
          item.type === "draggable" ?
          (
            <div className={`tool_wrapper ${item.type}`} key={index+item.id} draggable="true" onDragStart={(event)=>{
              onStartDrag(item.name);
              drag(event);
            }}>
              <div id="tool_icon"><i className={`fa ${item.icon}`} aria-hidden="true" id="tool_container_icon" style={{fontSize: item.size + 'px'}}></i></div>
              <div id="tool_lable">{item.label}</div>
            </div>
          )
          :
          (
            <div className={`tool_wrapper ${item.type}`} key={index+item.id} onClick={()=>{
              item.event(self);
              if(item.hasProps) {
                onClickStart(item.name);
              }
            }}>
              <div id="tool_icon"><i className={`fa ${item.icon}`} aria-hidden="true" id="tool_container_icon" style={{fontSize: item.size + 'px'}}></i></div>
              <div id="tool_lable">{item.label}</div>
            </div>
          )
        ))
      }
      </div>
    );
  }
}

export default ToolDrawer;
