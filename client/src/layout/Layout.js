import React, { Component } from 'react';
import './Layout.css';
import renderData from '../renderData';
import LayerPrompt from '../layer/LayerPrompt';

class Layout extends Component {
  constructor() {
    super()
    this.state = renderData;
    console.log(this.state);
    this.toggleLayerSelectionExpanded = this.toggleLayerSelectionExpanded.bind(this);
  }
  toggleLayerSelectionExpanded() {
    console.log("clicked");
    let { layerSelectionExpanded } = this.state;
    layerSelectionExpanded = !layerSelectionExpanded;
    this.setState({ layerSelectionExpanded });
  }
  render() {
    const { layerSelectionActive, layers } = this.state;
    return(
      <div className="container">
        <header className="header">
          <p>Header</p>
        </header>

        <div className="content">
          <LayerPrompt
            layerSelectionActive={ layerSelectionActive }
            layers={ layers }
            toggleLayerSelectionExpanded={ this.toggleLayerSelectionExpanded } />
          <p>The real content (child components) will go here.</p>
        </div>

        <footer className="footer">
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default Layout;
