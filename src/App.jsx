import React, { Component } from 'react';
import Layout from "./components/Layout";

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
      <Layout />
    )
  }
}