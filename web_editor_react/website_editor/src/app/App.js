import React, { Component } from 'react';
import './App.css';
import ToolDrawer from './components/ToolDrawer/tool_drawer';
import ComponentProperties from './components/ComponentProperties/component_properties';
import {
  allowDrop,
  drop
} from './methods.js';
import ToolProperties from './toolProperties.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      usedTool: "",
      toolProps: {
        container: ToolProperties.container
      },
      selectedDiv: "",
      selectedClass: ""
    };

    this.divHighlighter = this.divHighlighter.bind(this);
  }

  handlePrevSelectedDiv(prevDiv, nextDiv, className) {
    if(prevDiv !== '') {
      /** PREVIOUS SELECTED DIV STYLE **/
      // document.getElementById(prevDiv).style.border = "0px solid #006faf";
      // document.getElementById(prevDiv).style.width = "100%";

      if(prevDiv !== nextDiv) {
        /** NEW SELECTED DIV STYLE **/
        // document.getElementById(nextDiv).style.border = "2.5px solid #006faf";
        // document.getElementById(nextDiv).style.width = "99.75%";
        document.getElementById("component_properties_wrapper").style.display = "block";
        this.setState({selectedDiv: nextDiv, selectedClass: className});
      } else {
        /** NEW SELECTED DIV STYLE **/
        // document.getElementById(nextDiv).style.border = "0px solid #006faf";
        // document.getElementById(nextDiv).style.width = "100%";
        document.getElementById("component_properties_wrapper").style.display = "none";
        this.setState({selectedDiv: "", selectedClass: ""});
      }
    } else {
      if(prevDiv !== nextDiv) {
        /** NEW SELECTED DIV STYLE **/
        // document.getElementById(nextDiv).style.border = "2.5px solid #006faf";
        // document.getElementById(nextDiv).style.width = "99.75%";
        document.getElementById("component_properties_wrapper").style.display = "block";
        this.setState({selectedDiv: nextDiv, selectedClass: className});
      } else {
        /** NEW SELECTED DIV STYLE **/
        // document.getElementById(nextDiv).style.border = "0px solid #006faf";
        // document.getElementById(nextDiv).style.width = "100%";
        document.getElementById("component_properties_wrapper").style.display = "none";
        this.setState({selectedDiv: "", selectedClass: ""});
      }
    }
  }

  divHighlighter(event) {
    const { selectedDiv } = this.state;
    this.handlePrevSelectedDiv(selectedDiv, event.target.id, event.target.className);
  }

  render() {
    const { usedTool, selectedDiv, selectedClass } = this.state;
    const self = this;

    return (
      <div className="editor_wrapper">
        <div id="tools_and_props">
          <ToolDrawer onStartDrag={(tool)=>{
            this.setState({usedTool: tool})
          }}/>

          <ComponentProperties selectedDiv={selectedDiv} selectedClass={selectedClass}/>
        </div>

        <div id="site_body_wrapper" onDrop={(event)=>{drop(event, usedTool, self)}} onDragOver={(event)=>{allowDrop(event)}}>

        </div>
      </div>
    );
  }
}

export default App;
