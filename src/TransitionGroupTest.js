import React, { Component,Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';
import {TransitionGroup} from 'react-transition-group';

class TransitionGroupTest extends Component{

	constructor(props) {
		super(props);
		this.state = {
			list: []
		};
		this.handleAddItem = this.handleAddItem.bind(this);
	}

	render() {
		return (
			<Fragment>
				<TransitionGroup>
				{
					this.state.list.map((item, index) => {
						return (
							<CSSTransition
								timeout={1000}
								classNames='fade'
								unmountOnExit   //动画消失之后可以把这个DOM节点消除
								onEntered={(el) => {el.style.color='blue'}}   //此钩子函数获取的el为div，当然color也可以放在CSS的fade的系列里面
								appear={true}   //第一次出现的时候就用上该动态效果
								key={index}
							>
								<div>{item}</div>
							</CSSTransition>
						)
					})
				}
				</TransitionGroup>
				<button onClick={this.handleAddItem}>toggle</button>
			</Fragment>
		)
	}

	handleAddItem() {
		this.setState((prevState) => {
			return {
				list: [...prevState.list, 'item']
			}
		})
	}
}

export default TransitionGroupTest;