import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileSideNav from './MobileSideNav';

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
        <div className='col-span-2' onClick={this.showSideNav}>
            <FaBars className='w-8 h-8 mx-auto pt-1 text-cool-white'/>
        </div>
        <h1 className='col-start-4 col-span-8 text-center 
                       text-2xl font-bold font-my-sans 
                       pt-1 align-middle text-cool-white'>
            {'<jisena />'}
        </h1>
        <MobileSideNav show={this.state.side} />
      </>
    )
  }
}
