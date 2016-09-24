'strict mode'

var EditMotorForm = React.createClass({
	getInitialState() {
		return {
			motor: this.props.motor,
			errors: {}
		}
	},

	handleNameChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.name = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

	handleMassChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.mass = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

  	handleEfficiencyChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.efficiency = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

	handlePeakPowerChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.peak_power = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

  	handleMaxTorqueChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.max_continuous_torque = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

  	handleMaxSpeedChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.max_continuous_speed = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

  	handleLinkChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.link = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

	handleCostChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.cost = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

  	handleNotesChange(e) {
	    var newMotor = this.state.motor;
	    newMotor.notes = e.target.value;
	    this.props.handleEditMotor({motor: newMotor});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" onChange={this.handleNameChange} value={this.state.motor.name}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Mass" onChange={this.handleMassChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Efficiency" onChange={this.handleEfficiencyChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Peak Power" onChange={this.handlePeakPowerChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Max Torque" onChange={this.handleMaxTorqueChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Max Speed RPM" onChange={this.handleMaxSpeedChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Link" onChange={this.handleLinkChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Cost" onChange={this.handleCostChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Notes" onChange={this.handleNotesChange}/>
				</div>				
			</div>
		);
	}
});