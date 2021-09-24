import React, { Component } from 'react'

export default class Read extends Component {
    style = { width: '100px' }
    style1 = { position: 'absolute', left: '500px' }
    style2 = { padding: '4px' }
    constructor() {
        super();
        this.state = { data2: [], edit: null };
    }

    del = function (tmp) {
        let x = this.data2.indexOf(tmp)
        delete this.data2[x];
        let filtered = this.data2.filter((obj) => { return ![null, undefined].includes(obj) })
        this.data2 = filtered;
        localStorage.setItem('todos', JSON.stringify(this.data2));
        let element = document.getElementById(tmp[0]);
        element.innerHTML = null;
    }
    
    edt = function (tmp) {
        this.setState({ edit: tmp });
        //console.log(typeof this.state.edit);
    }
    edt2 = function (tmp) {
        let x = this.data2.indexOf(tmp);
        this.data2[x] = [tmp[0], this.state.edit];
        console.log('hello', this.data2);
        localStorage.setItem('todos', JSON.stringify(this.data2));
        let element = document.getElementById('dv' + tmp[0]);
        element.innerText = this.state.edit;
    }



    render() {
        this.data2 = this.props.data;
        return (
            <div>
                {this.data2.map((ee) => {
                    return (<div id={ee[0]} key={ee[0]} ><li id={'li' + ee[0]} style={this.style2}><span id={'dv' + ee[0]} >{ee[1]}</span>
                        <span style={this.style1}><button type="button" className="btn mx-3 btn-sm btn-dark" value={ee} onClick={
                            () => this.del(ee)}>Delete</button>
                            <input type="text" id={"inp" + ee[0]} placeholder="Edit" onChange={(tmp) => { this.edt(tmp.target.value) }} />
                            <button type="button" className="btn mx-3 btn-sm btn-dark" value={ee} onClick={() => this.edt2(ee)}>Edit</button></span>
                    </li>

                    </div>)
                })}

            </div>
        )
    }
}
