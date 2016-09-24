var Motors = React.createClass({
	getInitialState() {
		return {
			motors: this.props.motors,
			showNewMotorForm: false,
			showEditMotorForm: false,
			selectedMotor: {
				name: 'Motors'
			},
			motor: {
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

	selectMotor(motor) {
		this.setState({
			selectedMotor: motor
		})
 	},

	showNewMotorForm() {
		this.state.showNewMotorForm ? this.setState({ showNewMotorForm: false }) : this.setState({ showNewMotorForm: true });
	},

	showEditMotorForm() {
		this.state.showEditMotorForm ? this.setState({ showEditMotorForm: false }) : this.setState({ showEditMotorForm: true });
	},

	handleNewMotor(data) {
		this.setState({
			motor: data.motor
		})
	},

	handleEditMotor(data) {
		this.setState({
			motor: data.motor
		})
	},

	postMotor() {
    var that = this;
    $.ajax({
      method: 'POST',
      data: {
        motor: that.state.motor,
      },
      url: '/motors.json',
      success: function(res) {
        var newMotorList = that.state.motors;
        newMotorList.push(res);
        that.setState({
          motors: newMotorList,
          motor: {
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
	      	showMotorForm: false,
          errors: {}
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
	},

	render() {
		motors = this.state.motors.map( function(motor) {
      return (
        <li key={motor.id} onClick={() => this.selectMotor(motor)}><a>{motor.name}</a></li>
      );
    }, this);

		return (
			<div>
				<h1>Motor:</h1>
				<div id="motors">
					<div className="btn-group">
					  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    {this.state.selectedMotor.name} <span className="caret"></span>
					  </button>
					  <ul className="dropdown-menu">
						  {motors}
					  </ul>
					</div>
					{ this.state.selectedMotor.name === 'Motors' ? null : <button type="button" className="btn btn-default" onClick={this.showEditMotorForm}>Edit Motor</button> }

					<br/>
					{ this.state.showNewMotorForm ? <button type="button" className="btn btn-default" onClick={this.postMotor}>Add</button> : this.state.showEditMotorForm ? null : <button type="button" className="btn btn-default" onClick={this.showNewMotorForm}>Add New Motor</button> }
					{ this.state.showNewMotorForm ? <button type="button" className="btn btn-default" onClick={()=>this.setState({showNewMotorForm:false})}>Cancel</button> : null }

			  	<br/>
			  	{ this.state.showNewMotorForm ? <NewMotorForm key={'new'} handleNewMotor={this.handleNewMotor} /> : null }
			  	{ this.state.showEditMotorForm ? <EditMotorForm key={'edit'} handleEditMotor={this.handleEditMotor} motor={this.state.selectedMotor}/> : null }
				</div>
			</div>
		);
  	}
});