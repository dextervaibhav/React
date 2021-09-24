import React, { Component } from 'react'
import Read from './Read'
export default class Create extends Component {
    style = { width: '200px' }

    constructor() {
        super();
        this.state = { data: [] }

    }
    ind = 0;
    adding = () => {
        let todo = document.getElementById("todo");
        let val = todo.value;
        let tmp = [this.ind,val];
        this.ind+=1;
        this.setState({ state: this.state.data.push(tmp) })
        localStorage.setItem('todos', JSON.stringify(this.state.data));
    }

    render() {
        let dat = localStorage.getItem('todos');
        let disp = <Read data={this.state.data}/>;
        if(!dat){
            disp = <p>no list</p>;
        }
        return (
            <div>
                <div className="container">
                    <input className="form-control form-control-sm my-3" type="text" id="todo" placeholder="Enter your task" style={this.style} />
                    <button type="button" className="btn btn-dark btn-sm" onClick={this.adding} >Add</button>
                </div>
                <div id="display" className="container my-3">
                   {disp}
                </div>
            </div>
        )
    }

}
