import React, { Component } from 'react'

export default class NavItem extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       first: true
    }
  }

  render() {
    return (
      <div className='bg-red-300 w-3/12'>
        <h2 className='font-normal font-my-sans
                       text-3xl text-cool-white text-center'>
          {this.props.item}
        </h2>
      </div>
    )
  }
}