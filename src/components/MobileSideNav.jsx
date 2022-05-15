import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

export default class MobileSideNav extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return (
        <div className={`bg-cool-blue row-start-2 absolute w-5/6 ${this.props.show ? '': '-left-full'} h-screen`}>
            <div onClick={this.props.clicked}>
                <FaTimes className='w-8 h-8 pt-1 text-cool-white absolute right-3'/>
            </div>
          MobileSideNav
        </div>
    )
  }
}