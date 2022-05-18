import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';

export default class MobileTopNav extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         first: true
      }
    }
  render() {
    return (
      <>
        <div className='col-span-2 h-12' onClick={this.props.clicked}>
            <FaBars className='w-8 h-8 mx-auto pt-1 text-cool-white'/>
        </div>
        {/* <h1 className={`col-start-4 col-span-8 text-center 
                       text-2xl font-bold font-my-sans 
                       pt-1 align-middle text-cool-white ${this.props.show ? '' : 'invisible'}`}>
            {'<jisena />'}
        </h1> */}
      </>
    )
  }
}
