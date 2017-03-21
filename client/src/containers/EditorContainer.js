import React, {Component} from 'react';
import Editor from '../components/Editor';
import renderData from '../renderData';

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: {
        layerSelectionExpanded: false,
        layerCreatorExpanded: false,
      },
      layers: [],
    };
  }
  componentDidMount() {
    this.setState(renderData);
  }
  render() {
    return(<Editor />)
  }
}

export default EditorContainer;
