import React, { Component } from 'react';
import Section from './Section';
import Aside from './Aside';

export default class Main extends Component {
  render() {
    return (
      <div className='col-span-full grid grid-cols-12
                      gap-3 mt-44 absolute -left-full xl:static'>
            <Section />
            <Aside />
      </div>
    )
  }
}