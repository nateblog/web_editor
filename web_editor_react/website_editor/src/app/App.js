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
      selectedDiv: ""
    };

    this.divHighlighter = this.divHighlighter.bind(this);
  }

  handlePrevSelectedDiv(prevDiv, nextDiv) {
    if(prevDiv !== '') {
      /** PREVIOUS SELECTED DIV STYLE **/
      document.getElementById(prevDiv).style.border = "0px solid red";
      document.getElementById(prevDiv).style.width = "100%";

      if(prevDiv !== nextDiv) {
        /** NEW SELECTED DIV STYLE **/
        document.getElementById(nextDiv).style.border = "2.5px dashed red";
        document.getElementById(nextDiv).style.width = "99.45%";
        document.getElementById("component_properties_wrapper").style.display = "block";
        this.setState({selectedDiv: nextDiv});
      } else {
        /** NEW SELECTED DIV STYLE **/
        document.getElementById(nextDiv).style.border = "0px solid red";
        document.getElementById(nextDiv).style.width = "100%";
        document.getElementById("component_properties_wrapper").style.display = "none";
        this.setState({selectedDiv: ""});
      }
    } else {
      if(prevDiv !== nextDiv) {
        /** NEW SELECTED DIV STYLE **/
        document.getElementById(nextDiv).style.border = "2.5px dashed red";
        document.getElementById(nextDiv).style.width = "99.45%";
        document.getElementById("component_properties_wrapper").style.display = "block";
        this.setState({selectedDiv: nextDiv});
      } else {
        /** NEW SELECTED DIV STYLE **/
        document.getElementById(nextDiv).style.border = "0px solid red";
        document.getElementById(nextDiv).style.width = "100%";
        document.getElementById("component_properties_wrapper").style.display = "none";
        this.setState({selectedDiv: ""});
      }
    }
  }

  divHighlighter(event) {
    const { selectedDiv } = this.state;
    this.handlePrevSelectedDiv(selectedDiv, event.target.id);
  }

  render() {
    const { usedTool } = this.state;
    const self = this;

    return (
      <div className="editor_wrapper">
        <div id="tools_and_props">
          <ToolDrawer onStartDrag={(tool)=>{
            this.setState({usedTool: tool})
          }}/>

          <ComponentProperties />
        </div>

        <div id="site_body_wrapper" onDrop={(event)=>{drop(event, usedTool, self)}} onDragOver={(event)=>{allowDrop(event)}}>

        </div>
      </div>
    );
  }
}

export default App;
