import React, { Component } from 'react';
import './style.css';
import Tools from './tools.js';
import {
  drag
} from '../../methods.js';

class ToolDrawer extends Component {
  render() {
    const { onStartDrag } = this.props;

    return (
      <div className="tool_drawer_wrapper">
      {
        Tools.map((item, index) => (
          <div className="tool_wrapper" key={index+item.id} draggable="true" onDragStart={(event)=>{
            onStartDrag(item.name);
            drag(event);
          }}>
            <div id="tool_icon"><i className={`fa ${item.icon}`} aria-hidden="true" id="tool_container_icon" style={{fontSize: item.size + 'px'}}></i></div>
            <div id="tool_lable">{item.label}</div>
          </div>
        ))
      }
      </div>
    );
  }
}

export default ToolDrawer;
