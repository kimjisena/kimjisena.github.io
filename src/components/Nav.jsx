import React, { Component } from 'react';
import NavItem from './NavItem';

export default class Nav extends Component {
  render() {
    return (
        <div className='col-span-full flex'>
          <NavItem item='about'/>
          <NavItem item='projects'/>
          <NavItem item='blog'/>
          <NavItem item='contact'/>
        </div>
    )
  }
}
