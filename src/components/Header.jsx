import React, { Component } from 'react';
import ImageLogo from './ImageLogo';
import TextLogo from './TextLogo';
import Nav from './Nav';

export default class Header extends Component {

  render() {
    return (
        <div className='fixed top-0 w-3/4 pt-3 bg-cool-white'>
            <header className='grid grid-cols-12 grid-rows-2 gap-3 col-span-full'>
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