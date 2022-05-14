import React, { Component } from 'react';

export class Layout extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         first: true
      }
    }

  render() {
    return (
      <div>Layout</div>
    )
  }
}

export default Layout;