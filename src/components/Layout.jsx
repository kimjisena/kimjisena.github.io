import React, { Component } from 'react';
import Header from './Header';
import Button from './Button';
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
      <div className='container grid grid-cols-12 gap-3 mx-auto w-3/4'>
        <Header />
        <MobileMain />
        <Main />
        <Button />
      </div>
    )
  }
}