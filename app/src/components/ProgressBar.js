import React, { Component } from 'react';


export default class ProgressBar extends Component {
    state = {
        width: 80
    }

    barWidth =()=> {
        (this.state.width <=95) ?  this.setState({width: this.state.width + 5}) : console.log('stop')
    }
    clearWidth =() =>{
        this.setState({width: 0})
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="container-bar" style={{width: this.state.width + '%'}}><div>{this.state.width}%</div></div>
                    <button onClick={this.barWidth}>+</button>
                    <button onClick={this.clearWidth}>clear</button>
                </div>

            </div>
        );
    }
}

