import React, { Component } from 'react';
import './style.css';
import { FormGroup, InputGroup, FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

class Size extends Component {
  constructor() {
    super();

    this.state = {
      selectedHeight: "px",
      selectedWidth: "px",
      width: 100,
      height: 100,
      prevSelectedId: "",
      selectedField: ""
    }
  }

  getUnitAndVal(val) {
    let getNums = [];
    let getUnits = [];
    let explode = val.split("");

    for(let i=0; i<explode.length; i++) {
      if(!isNaN(explode[i])) {
        getNums.push(explode[i]);
      } else {
        getUnits.push(explode[i]);
      }
    }

    return {
      value: getNums.join(""),
      unit: getUnits.join("")
    }
  }

  componentWillReceiveProps(nextProps) {
    const { prevSelectedId } = this.state;
    if(nextProps.selectedDiv !== "") {
      if(prevSelectedId !== nextProps.selectedDiv) {
        let getWidth = document.getElementById(nextProps.selectedDiv).style.getPropertyValue("width");
        let getHeight = document.getElementById(nextProps.selectedDiv).style.getPropertyValue("height");

        this.setState({
          prevSelectedId: nextProps.selectedDiv,
          width: parseInt(this.getUnitAndVal(getWidth).value, 10),
          height: parseInt(this.getUnitAndVal(getHeight).value, 10),
          selectedWidth: this.getUnitAndVal(getWidth).unit,
          selectedHeight: this.getUnitAndVal(getHeight).unit
        });
      }
    }
  }

  changeSize(ev, size) {
    const { selectedDiv } = this.props;
    const { selectedHeight, selectedWidth } = this.state;
    if(size === "height") {
      let value = ev.target.value !== "" ? ev.target.value + selectedHeight : 0 + selectedHeight;
      document.getElementById(selectedDiv).style.height = value;
      this.setState({ height: ev.target.value !== "" ? parseInt(ev.target.value, 10) : 0 });
    }
    if(size === "width") {
      let value = ev.target.value !== "" ? ev.target.value + selectedWidth : 0 + selectedWidth;
      document.getElementById(selectedDiv).style.width = value;
      this.setState({ width: ev.target.value !== "" ? parseInt(ev.target.value, 10) : 0 });
    }
  }

  changeSizeKeyup(val, size) {
    const { selectedDiv } = this.props;
    const { selectedHeight, selectedWidth } = this.state;
    if(size === "height") {
      document.getElementById(selectedDiv).style.height = val + selectedHeight;
    }
    if(size === "width") {
      document.getElementById(selectedDiv).style.width = val + selectedWidth;
    }
  }

  changeNumValOnArrowPress(ev, selectedField) {
    /** UP (INCREAMENT) **/
    if(ev.keyCode === 38) {
      let newValKeyup = this.state[selectedField] + 1;
      if(selectedField === "width") {
        this.changeSizeKeyup(newValKeyup, "width");
        this.setState({width: newValKeyup})
      }
      if(selectedField === "height") {
        this.changeSizeKeyup(newValKeyup, "height");
        this.setState({height: newValKeyup})
      }
    }

    /** UP (DECREAMENT) **/
    if(ev.keyCode === 40) {
      let newValKeydown = this.state[selectedField] - 1;
      if(selectedField === "width") {
        this.changeSizeKeyup(newValKeydown, "width");
        this.setState({width: newValKeydown})
      }
      if(selectedField === "height") {
        this.changeSizeKeyup(newValKeydown, "height");
        this.setState({height: newValKeydown})
      }
    }
  }

  render() {
    const { selectedDiv } = this.props;
    const { selectedHeight, selectedWidth, height, width, selectedField } = this.state;
    const sizeUnits = ["%", "px", "vh", "vw", "pt", "vmin", "em"];

    return (
      <div id="size_properties_wrapper">

        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="width" onChange={(ev)=>{this.changeSize(ev, "width")}} onFocus={()=>this.setState({selectedField: "width"})} onKeyDown={(ev)=>{this.changeNumValOnArrowPress(ev, selectedField)}} value={width} />
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title={selectedWidth}
            >
              {
                sizeUnits.map((item, index) => (
                  <MenuItem key={index} onClick={(val) => {
                    document.getElementById(selectedDiv).style.width = width + val.currentTarget.innerHTML;
                    this.setState({selectedWidth: val.currentTarget.innerHTML});
                  }}>{item}</MenuItem>
                ))
              }
            </DropdownButton>
          </InputGroup>
        </FormGroup>

        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="height" onChange={(ev)=>{this.changeSize(ev, "height")}} onFocus={()=>this.setState({selectedField: "height"})} onKeyDown={(ev)=>{this.changeNumValOnArrowPress(ev, selectedField)}} value={height} />
            <DropdownButton
              componentClass={InputGroup.Button}
              id="input-dropdown-addon"
              title={selectedHeight}
            >
              {
                sizeUnits.map((item, index) => (
                  <MenuItem key={index} onClick={(val) => {
                    document.getElementById(selectedDiv).style.height = height + val.currentTarget.innerHTML;
                    this.setState({selectedHeight: val.currentTarget.innerHTML});
                  }}>{item}</MenuItem>
                ))
              }
            </DropdownButton>
          </InputGroup>
        </FormGroup>

      </div>
    );
  }
}

export default Size;
