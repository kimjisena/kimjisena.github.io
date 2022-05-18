import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mobile from './components/mobile/Mobile';
import Desktop from './components/desktop/Desktop';
//import Layout from "./components/backup/Layout";

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       first: true
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = 'rgb(217, 233, 233)';
  }

  render() {
    return (
      <>
        {/*mobile version of the ui*/}
        <Routes>
          <Route path='/' element={<Mobile />} />
        </Routes>

        {/*desktop version of the ui*/}
        <Routes>
          <Route path='/' element={<Desktop />} />
        </Routes>
      </>
    )
  }
}