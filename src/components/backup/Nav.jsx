import React, { Component } from 'react';
import NavItem from './NavItem';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      active: 'about'
    }

    this.handleClickAbout = this.handleClickAbout.bind(this);
    this.handleClickBlog = this.handleClickBlog.bind(this);
    this.handleClickProjects = this.handleClickProjects.bind(this);
    this.handleClickContact = this.handleClickContact.bind(this);

    this.refOne = React.createRef();
    this.refTwo = React.createRef();
    this.refThree = React.createRef();
    this.refFour = React.createRef();

  }

  handleClick(e, any) {
    let active = this.refTwo.current.props.item;
    this.setState({active});
    console.log(any);

  }

  handleClickAbout(e) {
    let active = this.refOne.current.props.item;
    this.setState({active});
  }


  handleClickProjects(e) {
    let active = this.refTwo.current.props.item;
    this.setState({active});
  }


  handleClickBlog(e) {
    let active = this.refThree.current.props.item;
    this.setState({active});
  }


  handleClickContact(e) {
    let active = this.refFour.current.props.item;
    this.setState({active});
  }

  render() {
    return (
        <div className='col-span-full flex'>
          <NavItem item='about' active={this.state.active} clicked={this.handleClickAbout} ref={this.refOne}/>
          <NavItem item='projects' active={this.state.active} clicked={this.handleClickProjects} ref={this.refTwo}/>
          <NavItem item='blog' active={this.state.active} clicked={this.handleClickBlog} ref={this.refThree}/>
          <NavItem item='contact' active={this.state.active} clicked={this.handleClickContact} ref={this.refFour}/>
        </div>
    )
  }
}