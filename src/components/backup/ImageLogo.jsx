import React, { Component } from 'react';
import logo1 from '../../res/images/logo1.png';
import logo2 from '../../res/images/logo2.png';

export default class ImageLogo extends Component {
  render() {
    return (
      <>
        <div className='rounded-full float-left bg-cool-green w-36'>
          <img src={logo1} alt='' />
        </div>
        <div className='rounded-full float-left bg-cool-black w-36 -ml-16'>
          <img src={logo2} alt='' />
        </div>
      </>
    )
  }
}
