var Conditions = React.createClass({
	getInitialState() {
		return {
			cruise_speed: 45,
			wind_speed: 0,
			hill_incline: 0
		}
	},

	handleChange(input) {
    	var updatedConditions = this.state;
	    updatedConditions[input.target.id] = input.target.value;
	    this.props.handleConditionChange({cruise_speed: this.state.cruise_speed, wind_speed:this.state.wind_speed, hill_incline:this.state.hill_incline});
  	},

	render() {
		return (
			<div>
				<div className="input-group">
				  <h4> Cruise Speed </h4>
				  <input type="number" className="form-control" placeholder="Cruise Speed" onChange={this.handleChange} value={this.state.cruise_speed} id="cruise_speed" />
				</div>
				<div className="input-group">
				  <h4> Wind Speed </h4>
				  <input type="number" className="form-control" placeholder="Wind Speed" onChange={this.handleChange} value={this.state.wind_speed} id="wind_speed" />
				</div>
				<div className="input-group">
				  <h4> Hill Incline </h4>
				  <input type="number" className="form-control" placeholder="Hill Incline" onChange={this.handleChange} value={this.state.hill_incline} id="hill_incline" />
				</div>
			</div>
		);
  	}
});