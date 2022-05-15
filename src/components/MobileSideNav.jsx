import React, { Component } from 'react';

export default class MobileSideNav extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         first: true
      }
    }

  render() {
    return (
        <div className={`bg-orange-300 h-56 row-start-2 absolute w-5/6 ${this.props.show ? '': '-left-full'}`}>
          MobileSideNav
        </div>
    )
  }
}