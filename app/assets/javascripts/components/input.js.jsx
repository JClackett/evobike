var Input = React.createClass({
	getInitialState() {
		return {
			
		}
	},

	handleChange(input) {
		var key = input.target.id
		var obj = {};
		obj[key] = input.target.value;
	   	this.props.handleChange(obj)
  	},

	render() {
		return (
			<div className="input-group">
		  		<input type="text" className="form-control" placeholder={this.props.value} onChange={this.handleChange} id={this.props.id} />
			</div>
		);
  	}
});