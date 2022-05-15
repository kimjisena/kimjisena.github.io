import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

export default class MobileSideNav extends Component {
    constructor(props) {
      super(props);
    }

  render() {
    return (
        <div className={`bg-orange-300 h-56 row-start-2 absolute w-5/6 ${this.props.show ? '': '-left-full'}`}>
            <div onClick={this.props.clicked}>
                <FaTimes className='w-8 h-8 mx-auto pt-1 text-cool-white'/>
            </div>
          MobileSideNav
        </div>
    )
  }
}