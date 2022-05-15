import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';

export default class MobileNavBar extends Component {
  render() {
    return (
      <>
        <div className='col-span-2'>
            <FaBars className='w-8 h-8 mx-auto pt-1 text-cool-white'/>
        </div>
        <h1 className='col-start-4 col-span-8 text-center 
                       text-2xl font-bold font-my-sans 
                       pt-1 align-middle text-cool-white'>
            {'<jisena />'}
        </h1>
      </>
    )
  }
}
