import React, { Component } from 'react';
import Layout from "./components/Layout";
// import React, { useEffect } from 'react';
// import Play from './learn/Play';

// export default function App() {

//   useEffect(() => {
//     document.body.style.backgroundColor = 'rgb(217, 233, 233)';
//     window.addEventListener('popstate', e => {
//       console.log(e);
//   });
//   });

//   return (
//     <Play />
//   )
// }


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