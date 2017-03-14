import React from 'react';
import { Link } from 'react-router';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p> Affordance: the qualities or properties of an object that define its possible uses or make clear how it can or should be used.</p>
        <p> For example...the handle on a coffe mug! </p>

        <p>
          Every codebase inherently labels, organizes, and simplifies the complexities of the real world. This is done by people. This tool's goal is to take that organization and turn it into a visual format for much higher communication bandwidth/comprehension between different developers on the project over time. This is fundamentally a codebase storytelling tool.
        </p>

        <p>
          <Link to="/">Go Back</Link>
        </p>
      </div>
    );
  }
}
