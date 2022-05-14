import React, { Component } from 'react';
import { para } from './dummy';

export class Layout extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         first: true
      }
    }

  render() {
    return (
      <div className='grid grid-cols-4 gap-2'>
        <header className='col-span-4 border-b-2 border-orange-400 bg-slate-400'>
          {para}
        </header>
        <section className='col-span-3 border-t-2 border-b-2 border-orange-400 bg-slate-400 rounded'>
          <p>
            {para}
          </p>
          <p>
            {para}
          </p>
          <p>
            {para}
          </p>
        </section>
        <p className='border-t-2 border-b-2 border-orange-400 bg-slate-400 rounded'>
          {para}
        </p>
      </div>
    )
  }
}

export default Layout;