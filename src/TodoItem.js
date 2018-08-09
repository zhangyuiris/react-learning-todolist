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

	render() {
		const {content,test} = this.props;
		return (
			<div onClick={this.handleDelete}>
				{test}-{content}
			</div>
		)
		// return React.createElement('div', {}, React.createElement('span', {}, 'item'))
	}
}

// 对prop接受到的东西进行强校验,此时test是没有从父组件里面传递过来的
TodoItem.propTypes = {
	test: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
};

// 默认值
TodoItem.defaultProps = {
	test: 'hello world'
};

export default TodoItem;