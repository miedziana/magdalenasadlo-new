import React from 'react';

import './ProgressBullet.css'

class ProgressBullet extends React.Component {
	

	render() {
		const filling = this.props.filled === true ? "filled" : "";
		const allClasses = "dot " + filling;
		return (
		  <span className = {allClasses}></span>
			
		)
	}



}

ProgressBullet.defaultProps = {
	filled: true
}

export default ProgressBullet;