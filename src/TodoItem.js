import React from 'react'
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	// 子组件如果要向父组件传值，需要调用父组件传递过来的方法

	handleDelete() {
		const { deleteItem, index} = this.props;
		deleteItem(index)
	}

	// 使用该函数时，子组件要向父组件接受参数
	// 第一次存在于父组件中不执行
	// 之前存在才回执行
	// componentWillReceiveProps() {
	// 	console.log('child componentWillReciveProps');
	// }
	//
	// componentWillUnmount() {
	// 	console.log('componentWillUnmount');
	// }

	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.content !== this.props.content) {
			return true
		}else {
			return false;
		}
	}

	render() {
		console.log('child render');
		const {content} = this.props;
		return (
			<div onClick={this.handleDelete}>
				{content}
			</div>
		)
		// return React.createElement('div', {}, React.createElement('span', {}, 'item'))
	}
}

// 对prop接受到的东西进行强校验,此时test是没有从父组件里面传递过来的
TodoItem.propTypes = {
	// test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
};

// 默认值
TodoItem.defaultProps = {
	// test: 'hello world'
};

export default TodoItem;