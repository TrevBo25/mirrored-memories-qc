import React, { Component } from 'react';
import Router from './Router';
import Nav from './Nav';
import Footer from './Footer';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'white',
      type: 'landing'
    }
  }

  render() {
    return (
      <div className='app'>
        <Nav color={this.state.color} type={this.state.type} />
        <Router />
        <Footer color={this.state.color} type={this.state.type} />
      </div>
    )
  }
}
