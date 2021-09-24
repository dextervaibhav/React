import React, { Component } from 'react'
import Create from './components/Create'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <div className="container my-3 text-center d-flex align-items-center justify-content-center">
        <h3 style={this.style}>To do list</h3>
        
      </div>
      <Create/>  
      </div>
    )
  }
}
