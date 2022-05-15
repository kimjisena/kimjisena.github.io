import React, { Component } from 'react';
import { root, about, projects, blog, contact } from './reducers';
import { Store } from './store';

const mystore = new Store(root);
mystore.addReducer(about);
mystore.addReducer(projects);
mystore.addReducer(blog);
mystore.addReducer(contact);

export default class NavItem extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       first: true
    }
    this.ref = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }
  
  handleClick(e) {
    mystore.dispatch({type: `nav/${this.props.item}`});
    //this.ref.current.style.backgroundColor = 'rgb(111, 161, 111)';
  }

  update() {
    this.setState(this.state);
  }

  componentDidMount() {
    //this.timerId = setInterval(this.update, 10);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const active = mystore.getState()[this.props.item];
    console.log(active);
    return (
      <div className={`w-3/12 pt-4 hover:bg-cooler-blue
                      hover:cursor-pointer 
                      ${active ? 'bg-cool-green' : ''}
                      `}
           onClick={this.handleClick}
           ref={this.ref}>
        <h2 className='font-normal font-my-sans
                       text-3xl text-cool-white text-center'>
          {this.props.item}
        </h2>
      </div>
    )
  }
}