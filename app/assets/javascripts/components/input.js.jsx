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
				<h4> {this.props.name} </h4>
		  		<input type="text" className="form-control" placeholder={this.props.value} onChange={this.handleChange} id={this.props.id} />
			</div>
		);
  	}
});