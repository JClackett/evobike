'strict mode'

var NewBikeForm = React.createClass({
	getInitialState() {
		return {
			bike: {
				id: '',
				name: '',
				dry_mass: '',
				radius_wheel: '',
				gear_ratio: '',
			},
			errors: {}
		}
	},

	handleChange(input) {
	    var newBike = this.state.bike;
	    newBike[input.target.id] = input.target.value;
	    this.props.handleNewBike({bike: newBike});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" onChange={this.handleChange} id="name" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Dry Mass" onChange={this.handleChange} id="dry_mass" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Radius of rear wheel" onChange={this.handleChange} id="radius_wheel" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Gear Ratio" onChange={this.handleChange} id="gear_ratio" />
				</div>					
			</div>
		);
	}
});