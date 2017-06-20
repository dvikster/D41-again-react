import React, { Component } from 'react';


export default class Timer extends Component {
    state = {
        time: 0
    }

    componentDidMount() {
        this.timer = setInterval(this.timerFunction, 1000)
    }

    timerFunction =()=>{
        this.setState({time: this.state.time +1})

    }

    restartTimer=()=>{
        clearInterval(this.timer);
        this.setState({time: 0});
        this.timer = setInterval(this.timerFunction, 1000);
    }

    componentWillUnMount() {
        this.setState({time: this.state.time});
        clearInterval(this.timer);
    }


    render() {
        return (
            <div>
                <h2>Таймер</h2>
                Прошло <strong>{this.state.time}</strong> секунд <br/>
                <button onClick={this.componentWillUnMount.bind(this)}>Stop</button>
                <button onClick={this.restartTimer}>Restart</button>

            </div>
        );
    }
}

