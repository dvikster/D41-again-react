import React, { Component } from 'react';
import './App.css';
import InputText from './components/InputText'
import ColorButtons from './components/ColorButtons'
import InputPass from './components/InputPass'
import InputPass1 from './components/InputPass1'
import InputPass2 from './components/InputPass2'
import Timer from './components/Timer'
import ProgressBar from './components/ProgressBar'

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

        <h2>Задание 3: проверка пароля</h2>
        <InputPass />

        <h2>Задание 3a: проверка пароля - сокращенный вариант</h2>
        <InputPass1 />

        <h2>Задание 3б: проверка пароля - другой странный вариант</h2>
        <InputPass2 />

        <h2>Задание 4: Tаймер </h2>
        <p>должен содержать внутри себя методы, которые мы прошли сегодня - componentDidMount - componentDidUnmount.
          таймер простой, с текстом: "Прошло (определенное количество) секунд".</p>
        <Timer />

        <h2>Задание 5: Прогресс Бар </h2>
        <ProgressBar />
      </div>
    );
  }
}

