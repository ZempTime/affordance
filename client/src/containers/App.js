import React, {Component} from 'react';
import NavContainer from './NavContainer';
import EditorContainer from './EditorContainer';

class App extends Component {
  render() {
    return(
      <div className="content">
        <NavContainer />
        <EditorContainer />
      </div>
    )
  }
}

export default App;
