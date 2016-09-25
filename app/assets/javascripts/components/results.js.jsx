var Results = React.createClass({
	getInitialState() {
		return {
			topSpeed: 'Choose your components',
			drivingRange: '',
			batteryLife: '',
		}
	},

	// componentWillMount() {
	// 	var prop = 'init'
	// },

	// componentDidUpdate() {
	// 	console.log(this.props.results)
	// 	console.log(prop)

	// 	if (props !== this.props.results) {
	// 		this.calculateTopSpeed();
	// 		var props = this.props.results
	// 	}

	// },

	calculateTopSpeed() {
		var max_continuous_speed = this.props.results.motor.max_continuous_speed
		var gear_ratio = this.props.results.bike.gear_ratio
		var radius_wheel = this.props.results.bike.radius_wheel
		var max_rotation_of_wheel = max_continuous_speed/gear_ratio
		var topSpeed = max_rotation_of_wheel*2*Math.PI*radius_wheel*60/63360
		console.log(topSpeed);
		// this.setState({
		// 	topSpeed: topSpeed,
		// 	topSpeedCalculated: true
		// });
	},

	calculateDrivingRange() {

	},

	calculateBatteryLife() {

	},

	render() {
		return (
			<div className="panel panel-default">
			  	<div className="panel-heading">
			    	<h3 className="panel-title">Top Speed</h3>
			  	</div>
		 	 	<div className="panel-body">
			    	{this.state.topSpeed}
			  	</div>
			</div>
		);
  	}
});