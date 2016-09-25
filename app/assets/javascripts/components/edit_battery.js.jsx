'strict mode'

var EditBatteryForm = React.createClass({
	getInitialState() {
		return {
			battery: this.props.battery,
			errors: {}
		}
	},

	handleChange(input) {
    	var updatedBattery = this.state.battery;
	    updatedBattery[input.target.id] = input.target.value;
	    this.props.handleEditBattery({battery: updatedBattery});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" id="name" value={this.state.battery.name} onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Voltage" id="voltage" value={this.state.battery.voltage} onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Mass" id="mass" value={this.state.battery.mass} onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Life Cycles" id="life_cycles" value={this.state.battery.life_cycles} onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Amp Hours" id="amp_hours" value={this.state.battery.amp_hours} onChange={this.handleChange}/>
				</div>			
			</div>
		);
	}
});