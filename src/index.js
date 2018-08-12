import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 大写字母开头组件
import Todolist from './Todolist';
import Animation from './Animation';

ReactDOM.render(<Todolist />, document.getElementById('root'));

ReactDOM.render(<Animation />, document.getElementById('animation'));
