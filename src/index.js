import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';

// 大写字母开头组件
import Todolist from './Todolist';
import CSS from './CSSTransition';
import TransitionGroupTest from './TransitionGroupTest';
import TodoListV2 from "./TodoListV2";

ReactDOM.render(<Todolist />, document.getElementById('root'));
ReactDOM.render(<CSS />, document.getElementById('animation'));
ReactDOM.render(<TransitionGroupTest />, document.getElementById('new'));
ReactDOM.render(<TodoListV2 />, document.getElementById('antd'));
