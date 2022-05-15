import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import MobileMain from './MobileMain';

export default class Layout extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       first: true,
    }
  }

  render() {
    return (
      <div className='container grid grid-cols-12 gap-3 mx-auto w-full xl:w-4/5'>
        <Header />
        <MobileMain />
        <Main />
      </div>
    )
  }
}