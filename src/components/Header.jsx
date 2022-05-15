import React, { Component } from 'react';
import ImageLogo from './ImageLogo';
import TextLogo from './TextLogo';
import Nav from './Nav';
import MobileHeader from './MobileHeader';

export default class Header extends Component {

  render() {
    return (
        <div className='fixed top-0 pt-3 bg-cool-white w-full xl:w-4/5'>
            <MobileHeader />
            <header className='grid grid-cols-12 grid-rows-2 gap-3 col-span-full absolute -top-96 xl:static'>
                <div className='col-span-4 row-span-full'>
                    <ImageLogo />
                </div>

                <div className='col-span-4 row-span-1'>
                    <TextLogo />
                </div>

                <nav className='col-span-8 row-start-2
                              bg-cool-blue grid grid-cols-8'>
                    <Nav />
                </nav>
            </header>
        </div>
    )
  }
}