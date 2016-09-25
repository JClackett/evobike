var App = React.createClass({
	getInitialState() {
		return {
			motorSelected: false,
			batterySelected: false,
			bikeSelected: false,
			motor: '',
			battery: '',
			bike: ''
		}
	},

	handleMotorSelect(data){
		this.setState({
			motor: data,
			motorSelected: true
		})
	},

	handleBatterySelect(data){
		this.setState({
			battery: data,
			batterySelected: true
		})
	},

	handleBikeSelect(data){
		this.setState({
			bike: data,
			bikeSelected: true
		})
	},

	render() {
		return (
			<div>
				<h1>Motors:</h1>
				<Motors motors={this.props.motors} handleMotorSelect={this.handleMotorSelect}/>
				<h1>Batteries:</h1>
				<Batteries batteries={this.props.batteries} handleBatterySelect={this.handleBatterySelect}/>
				<h1>Bikes:</h1>
				<Bikes bikes={this.props.bikes} handleBikeSelect={this.handleBikeSelect}/>
				<h1>Outputs:</h1>
				<Results results={this.state}/>
			</div>
		);
  	}
});