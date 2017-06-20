import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputText extends Component {
    static propTypes = {
        text: PropTypes.string,
    }

    state = {
        text: this.props.text || ''
    }

    taskCheckboxChange = e => {
        this.setState({ text: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Введите текст</h2>
                <input  type="text"
                        value={this.state.text}
                        onChange={this.taskCheckboxChange}
                />
                <p>Hello, {(this.state.text === '')? "stranger!" : this.state.text+"!"}</p>
            </div>
        );
    }
}
