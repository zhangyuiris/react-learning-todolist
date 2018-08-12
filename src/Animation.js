import React, { Component,Fragment} from 'react';

class Animation extends Component{

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

export default Animation;