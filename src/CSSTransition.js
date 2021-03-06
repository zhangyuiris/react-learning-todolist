import React, { Component,Fragment} from 'react';
import {CSSTransition} from 'react-transition-group';

class CSS extends Component{

	constructor(props) {
		super(props);
		this.state = {
			show: true
		};
		this.toggle = this.toggle.bind(this);
	}

	render() {
		return (
			<Fragment>
				<CSSTransition
					in={this.state.show}
					timeout={1000}
					classNames='fade'
					unmountOnExit   //动画消失之后可以把这个DOM节点消除
					onEntered={(el) => {el.style.color='blue'}}   //此钩子函数获取的el为div，当然color也可以放在CSS的fade的系列里面
					appear={true}   //第一次出现的时候就用上该动态效果
				>
					<div>CSSAnimation</div>
				</CSSTransition>
				<div className={this.state.show ? 'show' : 'hide'}>
					hello
				</div>
				<button onClick={this.toggle}>toggle</button>
			</Fragment>
		)
	}

	toggle() {
		this.setState({
			show: this.state.show ? false : true
		})
	}
}

export default CSS;