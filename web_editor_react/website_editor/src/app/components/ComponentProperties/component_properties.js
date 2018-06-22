import React, { Component } from 'react';
import './style.css';
import { Background, Size } from './props/index';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class ComponentProperties extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      activeKey: ''
    };
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    const { selectedDiv, selectedClass } = this.props;
    const properties = [
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
    ];

    return (
      <div id="component_properties_wrapper">
        <div id="property_title">PROPERTIES</div>
        <ListGroup>
          <ListGroupItem header="Div ID">{`${selectedDiv}`}</ListGroupItem>
          <ListGroupItem header="Div CLASS">{`[ ${selectedClass.split(" ").join(", ")} ]`}</ListGroupItem>
        </ListGroup>
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
