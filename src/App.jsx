import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop';
//import Layout from "./components/backup/Layout";

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       light: true
    }

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme () {
    console.log('theme toggled!');
    this.setState((state) => {
      return {light: !state.light}
    });
  }

  componentDidMount() {
    document.body.className = 'bg-cool-white';
  }

  componentDidUpdate() {
    if (this.state.light) document.body.className = 'bg-cool-white';
    else document.body.className = 'bg-dark-cool-background';
  }

  render() {
    return (
      <>
        {/*mobile version of the ui*/}
        <Routes>
          <Route path='/' element={<Mobile toggleTheme={this.toggleTheme} />} />
        </Routes>

        {/*desktop version of the ui*/}
        <Routes>
          <Route path='/' element={<Desktop />} />
        </Routes>
      </>
    )
  }
}