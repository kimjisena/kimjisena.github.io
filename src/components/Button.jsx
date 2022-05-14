import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <div className='fixed top-3/4 right-12 
                        bg-cool-black text-white border-[1px]
                        rounded-md p-1
                        hover:bg-cool-blue'>
            <button>back to the top</button>
        </div>
    )
  }
}
