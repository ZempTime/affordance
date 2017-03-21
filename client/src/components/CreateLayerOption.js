import React, { Component } from 'react';

class CreateLayerOption extends Component {
  render() {
    let {toggleLayerCreatorExpanded} = this.props
    return(
      <a className="toolBar__createLayerOption" href="#" onClick={toggleLayerCreatorExpanded}>
        <p>
          Add Layer
        </p>
      </a>
    );
  }
}

export default CreateLayerOption;
