import React, { Component } from 'react';
import MobileSideNav from './MobileSideNav';
import MobileTopNav from './MobileTopNav';

export default class MobileNavBar extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         side: false
      }

      this.showSideNav = this.showSideNav.bind(this);
    }

    showSideNav (e) {
        this.setState({side: true});
    }


  render() {
    return (
      <>
        <MobileTopNav />
        <MobileSideNav show={this.state.side} />
      </>
    )
  }
}
