'strict mode'

var EditBikeForm = React.createClass({
	getInitialState() {
		return {
			bike: this.props.bike,
			errors: {}
		}
	},

	handleChange(input) {
    	var updatedBike = this.state.bike;
	    updatedBike[input.target.id] = input.target.value;
	    this.props.handleEditBike({bike: updatedBike});
  	},

  	render: function() {
		return (
			<div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Name" onChange={this.handleChange} value={this.state.bike.name} id="name" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Dry Mass" onChange={this.handleChange} value={this.state.bike.dry_mass} id="dry_mass" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Radius of rear wheel" onChange={this.handleChange} value={this.state.bike.radius_wheel} id="radius_wheel" />
				</div>
				<div className="input-group">
				  <input type="text" className="form-control" placeholder="Gear Ratio" onChange={this.handleChange} value={this.state.bike.gear_ratio} id="gear_ratio" />
				</div>			
			</div>
		);
	}
});