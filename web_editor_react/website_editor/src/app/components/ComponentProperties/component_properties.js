import React, { Component } from 'react';
import './style.css';
import { Background, Size } from './ContainerProps/index';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class ComponentProperties extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: ''
    };
  }

  getList(propType) {
    const { selectedDiv } = this.props;
    const PropList = {
      container: [
        {
          name: "background",
          label: "BACKGROUND",
          component: <Background selectedDiv={selectedDiv} />,
          icon: "fa-pencil-square"
        },
        {
          name: "size",
          label: "SIZE",
          component: <Size selectedDiv={selectedDiv} />,
          icon: "fa-arrows-alt"
        },
        {
          name: "position",
          label: "POSITION",
          component: <div>position</div>,
          icon: "fa-arrows"
        },
      ],
      settings: [
        {
          name: "app_title",
          label: "APP TITLE",
          component: <div>app title</div>,
          icon: "fa-pencil-square"
        }
      ]

    }

    if(propType !== "" && PropList[propType]) {
      return PropList[propType];
    } else {
      return [];
    }
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const { selectedDiv, selectedClass, usedTool } = this.props;
    const properties = this.getList(usedTool);

    let selectedToolDataProps = selectedDiv !== "" ? JSON.parse(document.getElementById(selectedDiv).getAttribute("data-props")) : null;

    return (
      <div id="component_properties_wrapper">
        <div id="property_title">PROPERTIES</div>
        {
          selectedToolDataProps !== null && selectedToolDataProps.target === "body" ?
          (
            <ListGroup>
              <ListGroupItem header="Div ID">{`${selectedDiv}`}</ListGroupItem>
              <ListGroupItem header="Div CLASS">{`[ ${selectedClass.split(" ").join(", ")} ]`}</ListGroupItem>
            </ListGroup>
          )
          :
          null
        }
        <div id="component_properties">

          <PanelGroup
            accordion
            id="accordion-controlled-example"
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            {
              properties.map((item, index) => (
                <Panel eventKey={index} key={index}>
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <i className={`fa ${item.icon}`} aria-hidden="true"></i>&nbsp;&nbsp;{item.label}
                    </Panel.Title>
                  </Panel.Heading>

                  <Panel.Body collapsible>
                    {item.component}
                  </Panel.Body>
                </Panel>
              ))
            }
          </PanelGroup>

        </div>
      </div>
    );
  }
}

export default ComponentProperties;
