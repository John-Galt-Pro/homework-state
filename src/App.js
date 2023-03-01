import "./App.css";

import { Component } from "react";

class Task extends Component {

	constructor(props) {
        super(props);
		this.state = {
			counter: this.props.counter
		}
    }

    NextNumber = () => {
		if (this.state.counter < 5) {
			this.setState(state => ({
				counter: state.counter + 1
			}))
		}
	}

	PreviousNumber = () => {
		if (this.state.counter > -5) {
			this.setState(state => ({
				counter: state.counter - 1
			}))
		}
	}

	RandomNumber = () => {
		this.setState({
			counter: Math.round(Math.random()*10)
		})
	}

	ResetNumber = () => {
		this.setState({
			counter: this.props.counter
		})
	}

    render() {
		const {counter} = this.state;

        return (
            <div className="app">
                <div className="counter">{counter}</div>
                <div className="controls">
                    <button onClick={this.NextNumber}>INC</button>
                    <button onClick={this.PreviousNumber}>DEC</button>
                    <button onClick={this.RandomNumber}>RND</button>
                    <button onClick={this.ResetNumber}>RESET</button>
                </div>
            </div>
        );
    }
}

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

function App() {
    return (
        <div className="App">
            <Task counter = {0}/>
        </div>
    );
}

export default App;
