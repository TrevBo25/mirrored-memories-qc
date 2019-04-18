import React, { Component } from 'react';
import Router from './Router';
import Nav from './Nav';
import Footer from './Footer';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'black',
    }
    this.updateNavAndFooter = this.updateNavAndFooter.bind(this);
  }

  updateNavAndFooter(color = 'black') {
    this.setState({color: color})
  }

  render() {
    return (
      <div className='app'>
        <Nav color={this.state.color} update={this.updateNavAndFooter}/>
        <Router update={this.updateNavAndFooter} />
        <Footer color={this.state.color} />
      </div>
    )
  }
}
