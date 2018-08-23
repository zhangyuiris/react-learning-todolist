import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_ITEM} from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
});

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: INIT_TODO_ITEM,
	data
});

export const getTodoListAction = () => {
	return (dispatch) => {
		axios.get('https://www.easy-mock.com/mock/5b7e333ddc10145d7b7f5c6d/todoList/getAllList').then((res) => {
			const data = res.data;
			console.log(data);
			const action = initListAction(data);
			dispatch(action);
			// 直接在本文件使用dispatch方法
		  // store.dispatch(action);
		})
	}
};