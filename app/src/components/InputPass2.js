import React, { Component } from 'react';


export default class InputPass2 extends Component {
    state = {
        text: '',

    }

    passInput = e => {
        this.setState({ text: e.target.value })

    }

    render() {

        return (
            <div>
                <h2>Введите пароль</h2>
                <input  type="text"
                        value={this.state.text}
                        onChange={this.passInput}
                />
                <p className={(this.state.text.length >= 6) ? "through" : ""}> 1. В вашем пароле должно быть минимум 6 знаков</p>
                <p className={(this.state.text.toLowerCase() !== this.state.text) ? "through" : ""}> 2. В вашем пароле должен быть хотя бы один большой знак</p>
                <p className={(this.state.text.toUpperCase() !== this.state.text) ? "through" : ""}> 3. В вашем пароле должен быть хотя бы один маленький знак</p>
            </div>
        );
    }
}
