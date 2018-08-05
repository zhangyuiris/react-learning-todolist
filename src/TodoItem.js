import React from 'react'

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
        return (
            <div onClick={this.handleDelete}>{this.props.content}</div>
        )
    }
}

export default TodoItem;