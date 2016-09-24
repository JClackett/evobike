var Home = React.createClass({
	getInitialState() {
		return {
			motors: this.props.motors,
			motor: {
				name: '',
				email: '',
				efficiency: '',
				peak_power: '',
				max_continuous_torque: '',
				max_continuous_speed: '',
				link: '',
				cost: '',
				notes: '',
			},
			errors: {}
		}
	},

  	render() {
	    return (
	    	<div>
				<h1>Bike</h1>
				<Motors motors={this.state.motors} key={this.state.motors.id} />
			</div>
	    );
  	},

});