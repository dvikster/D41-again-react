import React, { Component } from 'react';
import './App.css';
import InputText from './components/InputText'
import ColorButtons from './components/ColorButtons'

export default class App extends Component {
  render() {
    return (
      <div className="main">

        <h2>Задание 1: Написать динамический Hello World.</h2>
        <p>
         В поле ввода вводится текст. Снизу надпись, которая отображает “Hello, введенный-текст!”. Текст должен меняться по мере ввода. Если в поле ничего не введено, то должно быть выведено “Hello, stranger!”.
        </p>
        <InputText />


        <h2>Задание 2: Изменение цвета background (state/setState)</h2>
        <p>
          Изменение цвета background (state/setState)
          На поле изображено пять кнопок с названиями цветов (Желтый, Зелёный, Красный, Голубой, Оранжевый). Они окрашены в эти же цвета.
          По клику на кнопку с названием цвета background принимает тот же цвет, который был выбран на кнопке. </p>
        <ColorButtons />
      </div>
    );
  }
}

