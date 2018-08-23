import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

// 大写字母开头组件
// import Todolist from './Todolist';
// import CSSTransition from './CSSTransition';
// import TransitionGroupTest from './TransitionGroupTest';
import Addant from "./TodoListV2";

// ReactDOM.render(<Todolist />, document.getElementById('root'));
// ReactDOM.render(<CSSTransition />, document.getElementById('animation'));
// ReactDOM.render(<TransitionGroupTest />, document.getElementById('new'));
ReactDOM.render(<Addant />, document.getElementById('antd'));
