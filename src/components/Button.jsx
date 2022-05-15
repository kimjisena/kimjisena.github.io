import React, { Component } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={`fixed top-3/4 ${this.props.show ? 'right-12': '-right-12'}
                        bg-cool-blue text-cool-white border-[1px]
                        rounded-full p-1
                        hover:bg-cooler-blue`}>

            <FaChevronUp className='w-8 h-8'/>
        </div>
    )
  }
}
