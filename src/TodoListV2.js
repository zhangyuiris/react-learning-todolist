import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {
	getAddItemAction,
	getDeleteItemAction,
	getInputChangeAction,
	getTodoListAction
} from './store/actionCreators';
import TodoListUI from './TodoListV2UI';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		store.subscribe(this.handleStoreChange);
	}

	render() {
		return <TodoListUI
			inputValue={this.state.inputValue}
			handleInputChange={this.handleInputChange}
			handleBtnClick={this.handleBtnClick}
			list={this.state.list}
			handleDelete={this.handleDelete}
		/>
	}

	componentDidMount() {
		// axios.get('https://www.easy-mock.com/mock/5b7e333ddc10145d7b7f5c6d/todoList/getAllList').then((res) => {
		// 	const data = res.data;
		// 	console.log(data);
		// 	const action = initListAction(data);
		// 	store.dispatch(action);
		// })

		// 此时的action是一个函数，只有使用了thunk之后，才能使用为函数的action
		// store智能接受对象，再发下action是一个函数之后，它会自动执行一下这个函数
		const action = getTodoListAction();
		store.dispatch(action);
	}

	handleInputChange(e) {
		// const action = {
		// 	type: CHANGE_INPUT_VALUE,
		// 	value: e.target.value
		// };
		const action = getInputChangeAction(e.target.value);
		store.dispatch(action);
	}

	handleStoreChange() {
		this.setState(store.getState());
	}

	handleBtnClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleDelete(index) {
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}
}

export default TodoList;