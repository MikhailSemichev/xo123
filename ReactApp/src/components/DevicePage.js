import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { hashHistory } from 'react-router';

@observer
class DevicePage extends Component {
	state = {
		imageData: 'data:image/jpeg;base64,'
	};

	takePhoto = () => {
		navigator.camera.getPicture(
			imageData => {
				console.log(imageData);
				this.setState({
					imageData: imageData
				});
			}, 
			error => console.log(error),
			{ quality:10 }
		);
	}

	render() {
		return (
			<div className="device-page">
				<button onClick={hashHistory.goBack}> &lt;= BACK</button>
				
				<button onClick={this.takePhoto}>Take Photo</button>
				<image id="myImage" style={{width:"100%", height:"400px"}}
					src={this.state.imageData}>
				</image>				
			</div>
		);
	}
}

export default DevicePage;
