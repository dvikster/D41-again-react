import React, { Component } from 'react';


export default class InputPass1 extends Component {
    
    state = {
        text: ''

    }

    passInput = e => {
        this.setState({ text: e.target.value })

    }


    render() {

        let letterPass = this.state.text;
        let UpperClass, LowerClass;
        for (let i=0; i< letterPass.length; i++){
            let letterPassOne = letterPass[i];
            if(letterPassOne.toUpperCase() === letterPass[i]){
                UpperClass = "through"

            }
            else if(letterPassOne.toLowerCase() === letterPass[i]){
                LowerClass = "through"

            }
        }

        return (
            <div>
                <h2>Введите пароль</h2>
                <input  type="text"
                        value={this.state.text}
                        onChange={this.passInput}
                />
                <p className={(this.state.text.length >= 6) ? "through" : ""}>1. В вашем пароле должно быть минимум 6 знаков</p>
                <p className={UpperClass}> 2. В вашем пароле должен быть хотя бы один большой знак</p>
                <p className={LowerClass}> 3. В вашем пароле должен быть хотя бы один маленький знак</p>
            </div>
        );
    }
}
