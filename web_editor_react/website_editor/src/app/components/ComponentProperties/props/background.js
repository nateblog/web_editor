import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import './style.css';

class Background extends Component {
  render() {
    const { selectedDiv } = this.props;

    return (
      <div id="bg_properties_wrapper">
        <SketchPicker onChange={(res)=>{
          document.getElementById(selectedDiv).style.backgroundColor = res.hex;
        }}/>
      </div>
    );
  }
}

export default Background;
