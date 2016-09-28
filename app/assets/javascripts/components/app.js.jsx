var App = React.createClass({
	getInitialState() {
		return {
			motor: '',
			battery: '',
			bike: '',
			motorSelected: false,
			batterySelected: false,
			gear_ratio: 3.66,
			no_batts: 24,
			cruise_speed: 45,
			radius_wheel: 12.5,
			dry_mass: 88
		}
	},

	componentDidUpdate() {
		this.runCalcs()
		console.log(this.state)
	},

	handleMotorSelect(data){
		this.setState({
			motor: data,
			motorSelected: true,
		})
	},

	handleBatterySelect(data){
		this.setState({
			battery: data,
			batterySelected: true,
		})
	},

	handleChange(data){
		this.setState(
			data
		)
	},

	runCalcs(){
		this.refs.results.calculateDrivingRange({
			motor: this.state.motor, 
			battery: this.state.battery, 
			motorSelected: this.state.motorSelected,
			batterySelected: this.state.batterySelected,
			gear_ratio: parseFloat(this.state.gear_ratio),
			no_batts: parseFloat(this.state.no_batts),
			cruise_speed: parseFloat(this.state.cruise_speed),
			radius_wheel: parseFloat(this.state.radius_wheel),
			dry_mass: parseFloat(this.state.dry_mass)
		})

		this.refs.results.calculateTopSpeed({
			motor: this.state.motor, 
			battery: this.state.battery, 
			gear_ratio: parseFloat(this.state.gear_ratio),
			radius_wheel: parseFloat(this.state.radius_wheel),
			motorSelected: this.state.motorSelected,
			batterySelected: this.state.batterySelected,
		})
	},

	render() {
		return (
			<div>
				<div className="motors">
					<h3>Motor</h3>
					<Motors motors={this.props.motors} handleMotorSelect={this.handleMotorSelect}/>
				</div>
				<div className="batteries">
					<h3>Battery</h3>
					<Batteries batteries={this.props.batteries} handleBatterySelect={this.handleBatterySelect}/>
				</div>

				<div className="bike-weight">
					<Input id="dry_mass" name="Bike weight exc. engine" value={this.state.dry_mass} handleChange={this.handleChange}/>
				</div>
				<div className="wheel-radius">
					<Input id="radius_wheel" name="Wheel radius (inches)" value={this.state.radius_wheel} handleChange={this.handleChange}/>
				</div>
				<div className="gear-ratio">
					<Input id="gear_ratio" name="Gear ratio" value={this.state.gear_ratio} handleChange={this.handleChange}/>
				</div>
				<div className="no-batts">
					<Input id="no_batts" name="Number of batteries" value={this.state.no_batts} handleChange={this.handleChange}/>
				</div>
				<div className="cruise-speed">
					<Input id="cruise_speed" name="Crusing speed" value={this.state.cruise_speed} handleChange={this.handleChange}/>
				</div>

				<div className="outputs">
					<Results ref={'results'}/>
				</div>
			</div>
		);
  	}
});