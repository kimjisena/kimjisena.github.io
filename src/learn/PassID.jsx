import React, { Component } from 'react';

export default class PassID extends Component {

    handleClick(id, e) {
        console.log(id);
        console.log(e);
    }

  render() {
    return (
      <div>
          <button onClick={this.handleClick.bind(this, 'id')}>click me</button>
          <a href='/contact' onClick={(e) => {
              e.preventDefault();

              window.history.pushState('how u like me now?', undefined, '/contact');
          }}>click me</a>
      </div>
    )
  }
}
