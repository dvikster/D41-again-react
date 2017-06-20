import React, { Component } from 'react';


export default class InputPass extends Component {
    state = {
        text: '',

    }

    passInput = e => {
        this.setState({ text: e.target.value })

    }

    checkLetterNumber() {
        return this.state.text.length >= 6;
    }
    upperCase(){
            return this.state.text.toLowerCase() !== this.state.text;
    }
    lowerCase(){
            return this.state.text.toUpperCase() !== this.state.text;
    }

    render() {
        console.log('lowerCase ' + this.lowerCase());
        console.log('upperCase ' + this.upperCase());
        return (
            <div>
                <h2>Введите пароль</h2>
                <input  type="text"
                        value={this.state.text}
                        onChange={this.passInput}
                />
                <p className={(this.checkLetterNumber()) ? "through" : ""}> 1. В вашем пароле должно быть минимум 6 знаков</p>
                <p className={(this.upperCase()) ? "through" : ""}> 2. В вашем пароле должен быть хотя бы один большой знак</p>
                <p className={(this.lowerCase()) ? "through" : ""}> 3. В вашем пароле должен быть хотя бы один маленький знак</p>
            </div>
        );
    }
}
