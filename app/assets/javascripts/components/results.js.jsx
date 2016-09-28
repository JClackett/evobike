var gravity = 9.81
var density_air = 1.29
var frontal_area = 0.41
var hill_incline = 0
var wind_speed = 0
var air_drag_coeff = 1
var roll_drag_coeff = 0.021
var elec_pwr_for_lights = 220

var Results = React.createClass({
	getInitialState() {
		return {
			topSpeed: '',
			drivingRange: '',
			batteryLife: '',
			motorSelected: false,
			batterySelected: false,
		}
	},

	calculateTopSpeed(data) {
		var max_continuous_speed = data.motor.max_continuous_speed
		var gear_ratio = data.gear_ratio
		var radius_wheel = data.radius_wheel
		var max_rotation_of_wheel = max_continuous_speed/gear_ratio
		var topSpeed = max_rotation_of_wheel*2*Math.PI*radius_wheel*60/63360
		this.setState({
			topSpeed: topSpeed.toFixed(2),
			motorSelected: data.motorSelected,
			batterySelected: data.batterySelected,
		});

	},

	calculateDrivingRange(data) {
		var total_mass = (data.dry_mass) + (data.motor.mass) + 18 + (data.battery.mass * data.no_batts) + 80
		console.log(total_mass)
		var cruise_speed_ms = (data.cruise_speed) * 0.44704
		var hill_drag = gravity*total_mass*Math.sin((Math.PI / 180)*(hill_incline))
		var roll_drag = roll_drag_coeff * total_mass * gravity * (Math.cos((Math.PI / 180)*(hill_incline)))
		var air_drag = 0.5*((air_drag_coeff * frontal_area) * density_air * ((cruise_speed_ms + wind_speed)*(cruise_speed_ms + wind_speed)))
		var wheel_force_req = air_drag + roll_drag + hill_drag
		var mech_pwr_for_motor = wheel_force_req*cruise_speed_ms
		var elec_pwr_for_motor = mech_pwr_for_motor/(data.motor.efficiency/100)
		var total_elec_pwr_from_batts = elec_pwr_for_motor + elec_pwr_for_lights
		var watt_hr_per_mile = total_elec_pwr_from_batts/data.cruise_speed
		var energy_batts = (data.battery.voltage)*(data.battery.amp_hours)*data.no_batts
		var drivingRange = energy_batts/watt_hr_per_mile
		this.setState({
			drivingRange: drivingRange.toFixed(2),
		})
	},

	calculateBatteryLife(data) {

	},

	render() {
		return (
			<div className="">
		    	<h3 className="">Top Speed</h3>
		    	{ this.state.motorSelected && this.state.batterySelected ? this.state.topSpeed+" mph" : "pick your parts..."}
				<h3 className="">Driving Range</h3>
		    	{ this.state.motorSelected && this.state.batterySelected ? this.state.drivingRange+" miles (at cruise speed)" : "pick your parts..."}
			</div>
		);
  	}
});