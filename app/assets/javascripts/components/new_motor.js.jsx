'strict mode'

var NewMotorForm = React.createClass({
	getInitialState() {
		return {
			motor: {
				id: '',
				name: '',
				mass: '',
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

	handleChange(input) {
	    var newMotor = this.state.motor;
	    newMotor[input.target.id] = input.target.value;
	    this.props.handleNewMotor({motor: newMotor});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" id="name" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Mass" id="mass" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Efficiency" id="efficiency" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Peak Power" id="peak_power" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Max Torque" id="max_continuous_torque" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Max Speed RPM" id="max_continuous_speed" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Link" id="link" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Cost" id="cost" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Notes" id="notes" onChange={this.handleChange}/>
				</div>				
			</div>
		);
	}
});