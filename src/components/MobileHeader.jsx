import React, { Component } from 'react';
import MobileNavBar from './MobileNavBar';

export default class MobileHeader extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         showbg: true,
         top: true,
         side: false
      }

      this.showSideNav = this.showSideNav.bind(this);
    }


    showSideNav (e) {
        this.setState({showbg: !this.state.showbg});
        this.setState({top: !this.state.top});
        this.setState({side: !this.state.side});
    }


  render() {
    return (
        <header className={`grid grid-cols-12 col-span-full xl:hidden ${this.state.showbg ? ' bg-cool-blue': ''}`}>
          <MobileNavBar top={this.state.top} side={this.state.side} clicked={this.showSideNav}/>
        </header>
    )
  }
}