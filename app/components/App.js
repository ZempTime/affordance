import React, {Component} from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      compliment: "Mathematical!"
    }
  }
  render() {
    const { praise } = this.state
    return (
      <div>
        <h1>{compliment}</h1>
      </div>
    )
  }
}