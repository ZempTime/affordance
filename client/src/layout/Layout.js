import React, { Component } from 'react';
import './Layout.css';
import renderData from '../renderData';
import LayerPrompt from '../layer/LayerPrompt';

class Layout extends Component {
  constructor() {
    super()
    this.state = renderData;
  }
  render() {
    return(
      <div className="container">
        <header className="header">
          <p>Header</p>
        </header>

        <div className="content">
          <LayerPrompt />
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
