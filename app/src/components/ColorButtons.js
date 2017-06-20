import React, { Component } from 'react';


export default class ColorButtons extends Component {
    state = {
        background: 'white'
    }

    ChangeBg =(e)=>{
        console.log(e.target.value);
        this.setState({background : e.target.value});
    }


    render() {
        console.log(this.state.background);

        document.body.className = this.state.background;

        return (
            <div>
                <button className="yellow"
                        value="yellow"
                        onClick={this.ChangeBg} >Желтый</button>
                <button className="green"
                        value="green"
                        onClick={this.ChangeBg} >Зелёный</button>
                <button className="red"
                        value="red"
                        onClick={this.ChangeBg} >Красный</button>
                <button className="blue"
                        value="blue"
                        onClick={this.ChangeBg} >Голубой</button>
                <button className="orange"
                        value="orange"
                        onClick={this.ChangeBg} >Оранжевый</button>
            </div>
        );
    }
}
