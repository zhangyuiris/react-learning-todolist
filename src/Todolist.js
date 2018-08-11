import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';

// 如果没有import { Component, Fragment} from 'react';
// 则需要extends React.Component

class Todolist extends Component {

	// 仅当存在constructor的时候必须调用super，如果没有，则不用
	// 如果在你声明的组件中存在constructor，则必须要加super
	// 若不执行super，则this无法初始化。

  // 将props传入super的作用是可以使你在constructor内访问它
  // 	class MyClass extends React.component{
  // 	  constructor(props){
  // 		  super();
  // 		  console.log(this.props); // this.props is undefined
  // 	  }
  // }

  // 如果你只是想在别处访问它，是不必传入props的，因为React会自动为你设置
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

  // 使用了扩展运算符。该运算符将一个数组，变为参数序列。
  // 例如:
  // var arr1 = ['a', 'b'];
	// var arr2 = ['c'];
	// var arr3 = ['d', 'e'];

  // ES5 的合并数组
	// arr1.concat(arr2, arr3);

	// ES6 的合并数组
	// [...arr1, ...arr2, ...arr3]
	// // [ 'a', 'b', 'c', 'd', 'e' ]

  handleButtonClick() {
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    }, ()=>{
      console.log(this.ul.querySelectorAll('div').length);
    })
    // console.log(this.ul.querySelectorAll('div').length);
    // 此时，因为setState是异步的，所以数据console length时，此时操纵dom数据还没有更新
  }


  // 有ref之后
	handleInputClick(e) {
    const value = this.input.value;
    this.setState({
      inputValue: value
    })
  }
  // 没有ref之前
  // handleInputClick(e) {
  //   // console.log(e.target);
  //   // <input value="ssss">
  //   this.setState({
  //     inputValue: e.target.value
  //   })
  // }

  // key值最好不用index
  // a 0, b 1, c 2
  // 因为新的渲染后
  // b 0, c 1
  // 用index的话没有意义
  // 可以使用item
  getItems() {
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem
            deleteItem={this.deleteItem}
            key={item}
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

  componentWillMount() {
    console.log('componentWillMount')
  }

  //组件改变后是否执行更新
  shouldComponentUpdate() {
	  console.log('shouldComponentUpdate')
    return true;
  }

  componentWillUpdate() {
	  console.log('componentWillUpdate')
  }

  // render里面各个元素一定要在
  render() {
    console.log('parent render');
    return (
      <Fragment>
        <input
          ref={(input)=>{this.input = input}}
          value={this.state.inputValue}
          onChange={this.handleInputClick}/>
        <button className='btn' onClick={this.handleButtonClick}>添加</button>
        <ul style={{color: 'blue'}} ref={(ul)=>{this.ul = ul}}>{this.getItems()}</ul>
      </Fragment>
    );
  }

	componentDidMount() {
		console.log('componentDidMount')
	}

}


export default Todolist;
