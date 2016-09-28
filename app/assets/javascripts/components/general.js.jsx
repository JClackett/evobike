var General = React.createClass({
	getInitialState() {
		return {
			gear_ratio: 3.66,
			no_batts: 24,
		}
	},

	handleChange(input) {
    	var updatedGeneral = this.state;
	    updatedGeneral[input.target.id] = input.target.value;
	    this.props.handleGeneralChange({gear_ratio: this.state.gear_ratio, no_batts:this.state.no_batts});
  	},

	render() {
		return (
			<div>
				<div className="input-group gear-ratio">
				  <h3> Gear Ratio</h3>
				  <input type="text" className="form-control" placeholder="Gear Ratio" onChange={this.handleChange} value={this.state.gear_ratio} id="gear_ratio" />
				</div>
				<div className="input-group no-batts">
				  <h3> Number of Batteries</h3>
				  <input type="text" className="form-control" placeholder="Number of Batteries" onChange={this.handleChange} value={this.state.no_batts} id="no_batts" />
				</div>
			</div>
		);
  	}
});