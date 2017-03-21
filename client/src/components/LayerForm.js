import React, { Component } from 'react';

class LayerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    let {createLayer} = this.props;
    event.preventDefault();
    createLayer(this.state.value);
    this.setState({value: '' });
  }
  cancelSubmit(event) {
    event.preventDefault();
    this.state = '';
    this.props.toggleLayerCreatorExpanded();
  }
  render() {
    return(
      <div>
        <form className="toolBar__layerForm" onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus={true} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p onClick={this.cancelSubmit}> cancel </p>
      </div>
    );
  }

}

export default LayerForm;
