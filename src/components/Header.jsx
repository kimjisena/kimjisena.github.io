import React, { Component } from 'react';
import Nav from './Nav';

export default class Header extends Component {

  render() {
    return (
        <header className='grid grid-cols-12 grid-rows-2 gap-3 col-span-full bg-slate-400'>
            <div className='col-span-4 row-span-full bg-orange-300 h-32'>
                image logo
            </div>
            <div className='col-span-4 row-span-1 bg-orange-300'>
                text logo
            </div>
            <div className='col-span-8 row-start-2 bg-orange-300 flex justify-between'>
                <Nav />
            </div>
        </header>
    )
  }
}