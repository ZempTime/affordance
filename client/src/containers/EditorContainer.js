import React, {Component} from 'react';
import Editor from '../components/Editor';
import { connect } from 'react-redux';
import store from '../store/store';
import renderData from '../renderData';

class EditorContainer extends Component {
  componentDidMount() {
    store.dispatch({
      type: "SAMPLE_DATA_SUCCESS",
      state: renderData
    });
  }
  render() {
    return(<Editor {...this.props} />)
  }
}

const mapStateToProps = (store) => {
  return {
    editor: store.editorState.editor,
    layers: store.editorState.layers
  };
}

export default connect(mapStateToProps)(EditorContainer);
