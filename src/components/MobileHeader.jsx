import React, { Component } from 'react';
import MobileNavBar from './MobileNavBar';
import Button from './Button';

export default class MobileHeader extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         showbg: true,
         top: true,
         side: false,
         button: true
      }

      this.showSideNav = this.showSideNav.bind(this);
    }

    showSideNav (e) {
        this.setState({
            showbg: !this.state.showbg,
            top: !this.state.top,
            side: !this.state.side,
            button: !this.state.button
        });

    }

  render() {
    return (
        <>
        <header className={`grid grid-cols-12 col-span-full xl:hidden ${this.state.showbg ? ' bg-cool-blue': ''}`}>
          <MobileNavBar top={this.state.top} side={this.state.side} clicked={this.showSideNav}/>
        </header>
        <Button show={this.state.button}/>
        </>
    )
  }
}