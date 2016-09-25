'strict mode'

var EditMotorForm = React.createClass({
	getInitialState() {
		return {
			motor: this.props.motor,
			errors: {}
		}
	},

	handleChange(input) {
    	var updatedMotor = this.state.motor;
	    updatedMotor[input.target.id] = input.target.value;
	    this.props.handleEditMotor({motor: updatedMotor});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" onChange={this.handleChange} value={this.state.motor.name} id="name" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Mass" onChange={this.handleChange} value={this.state.motor.mass} id="mass" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Efficiency" onChange={this.handleChange} value={this.state.motor.efficiency} id="efficiency" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Peak Power" onChange={this.handleChange} value={this.state.motor.peak_power} id="peak_power" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Max Torque" onChange={this.handleChange} value={this.state.motor.max_continuous_torque} id="max_continuous_torque" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Max Speed RPM" onChange={this.handleChange} value={this.state.motor.max_continuous_speed} id="max_continuous_speed" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Link" onChange={this.handleChange} value={this.state.motor.link} id="link" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Cost" onChange={this.handleChange} value={this.state.motor.cost} id="cost" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Notes" onChange={this.handleChange} value={this.state.motor.notes} id="notes" />
				</div>				
			</div>
		);
	}
});