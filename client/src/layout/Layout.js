import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
  render() {
    return(
      <div className="container">
        <header className="header">
          <p>Header</p>
        </header>

        <div className="content">
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
