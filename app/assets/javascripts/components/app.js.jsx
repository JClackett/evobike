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
			gear_ratio: this.state.gear_ratio,
			no_batts: this.state.no_batts,
			cruise_speed: this.state.cruise_speed,
			radius_wheel: this.state.radius_wheel,
			dry_mass: this.state.dry_mass
		})

		this.refs.results.calculateTopSpeed({
			motor: this.state.motor, 
			battery: this.state.battery, 
			gear_ratio: this.state.gear_ratio,
			radius_wheel: this.state.radius_wheel,
			motorSelected: true,
			batterySelected: true,
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
					<Input id="dry_mass" name="Bike weight exc. engine" handleChange={this.handleChange}/>
				</div>
				<div className="wheel-radius">
					<Input id="radius_wheel" name="Wheel radius (inches)" handleChange={this.handleChange}/>
				</div>
				<div className="gear-ratio">
					<Input id="gear_ratio" name="Gear ratio" handleChange={this.handleChange}/>
				</div>
				<div className="no-batts">
					<Input id="no_batts" name="Number of batteries" handleChange={this.handleChange}/>
				</div>
				<div className="cruise-speed">
					<Input id="cruise_speed" name="Crusing speed" handleChange={this.handleChange}/>
				</div>

				<div className="outputs">
					<Results ref={'results'}/>
				</div>
			</div>
		);
  	}
});