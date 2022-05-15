import React, { Component } from 'react';
import MobileSideNav from './MobileSideNav';
import MobileTopNav from './MobileTopNav';

export default class MobileNavBar extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return (
      <>
        <MobileTopNav clicked={this.props.clicked} show={this.props.top} />
        <MobileSideNav clicked={this.props.clicked} show={this.props.side} />
      </>
    )
  }
}
