import React, { Component } from 'react';
import MobileNavBar from './MobileNavBar';

export default class MobileHeader extends Component {
  render() {
    return (
        <header className='grid grid-cols-12 col-span-full bg-orange-300 xl:hidden'>
          <MobileNavBar />
        </header>
    )
  }
}