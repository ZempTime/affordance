import React, {Component} from 'react';
import {Link}, from 'react-router';

export default class Layout extends React.component {
  render() {
    return(
      <div className="container">
        <header>
          <p>header</p>
        </header>
        <div className="content">
          <h1>Mathematical!</h1>
          {this.props.children}
        </div>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    );
  }
}

