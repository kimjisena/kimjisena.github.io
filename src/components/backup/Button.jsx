import React, { Component } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default class Button extends Component {

  render() {
    return (
        <div className={`fixed ${this.props.show ? 'right-2': '-right-12'}
                         xl:right-20
                        bg-cool-blue text-cool-white border-[1px]
                        rounded-full p-1
                        hover:bg-cooler-blue top-[90%]`}>

            <FaChevronUp className='w-8 h-8'/>
        </div>
    )
  }
}
