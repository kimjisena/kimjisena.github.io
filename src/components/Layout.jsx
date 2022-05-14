import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Aside from './Aside';

export default class Layout extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       first: true,
    }
  }

  render() {
    return (
      <div className='container grid grid-cols-12 gap-2 mx-auto'>
        <Header />
        <Section />
        <Aside />
      </div>
    )
  }
}