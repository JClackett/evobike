'strict mode'

var NewBatteryForm = React.createClass({
	getInitialState() {
		return {
			battery: {
				id: '',
				name: '',
				voltage: '',
				mass: '',
				life_cycles: '',
				amp_hours: '',
			},
			errors: {}
		}
	},

	handleChange(input) {
	    var newBattery = this.state.battery;
	    newBattery[input.target.id] = input.target.value;
	    this.props.handleNewBattery({battery: newBattery});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" id="name" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Voltage" id="voltage" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Mass" id="mass" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Life Cycles" id="life_cycles" onChange={this.handleChange}/>
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Amp Hours" id="amp_hours" onChange={this.handleChange}/>
				</div>			
			</div>
		);
	}
});