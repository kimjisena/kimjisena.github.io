import React, { Component } from 'react';
import ImageLogo from './ImageLogo';
import TextLogo from './TextLogo';
import Nav from './Nav';

export default class Header extends Component {

  render() {
    return (
        <div className='fixed top-0 w-3/4 pt-3'>
            <header className='grid grid-cols-12 grid-rows-2 gap-3 col-span-full'>
                <div className='col-span-4 row-span-full bg-orange-300 h-32'>
                    <ImageLogo />
                </div>
                
                <div className='col-span-4 row-span-1 bg-orange-300'>
                    <TextLogo />
                </div>

                <nav className='col-span-8 row-start-2 bg-cool-blue grid grid-cols-8 gap-3'>
                    <Nav />
                </nav>
            </header>
        </div>
    )
  }
}