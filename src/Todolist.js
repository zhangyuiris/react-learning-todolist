import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class Todolist extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'learn english',
        'learn react'
      ],
      inputValue: ''
    };

    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  handleButtonClick() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })

  }
  
  handleInputClick(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  getItems() {
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem
            deleteItem={this.deleteItem}
            key={index}
            content={item}
            index={index}/>
        )
      })
    )
  }

  deleteItem(index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <Fragment>
        <input value={this.state.inputValue} onChange={this.handleInputClick}/>
        <button className='btn' onClick={this.handleButtonClick}>添加</button>
        <ul style={{color: 'blue'}}>{this.getItems()}</ul>
      </Fragment>
    );
  }
}

export default Todolist;
