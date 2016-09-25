var Motors = React.createClass({
	getInitialState() {
		return {
			motors: this.props.motors,
			showNewMotorForm: false,
			showEditMotorForm: false,
			selectedMotor: {
				name: 'Motors'
			},
			edited: false,
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

	selectMotor(motor) {
		this.setState({
			selectedMotor: motor
		})
 	},

	showNewMotorForm() {
		this.state.showNewMotorForm ? this.setState({ showNewMotorForm: false }) : this.setState({ showNewMotorForm: true });
	},

	showEditMotorForm() {
		this.setState({
			motor: this.state.selectedMotor,
		})
		this.state.showEditMotorForm ? this.setState({ showEditMotorForm: false }) : this.setState({ showEditMotorForm: true });
	},

	handleNewMotor(data) {
		this.setState({
			motor: data.motor
		})
	},

	handleEditMotor(data) {
		this.setState({
			motor: data.motor,
			edited: true
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
	      	showNewMotorForm: false,
          errors: {},
          edited: false
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
	},

	updateMotor() {
	  if (this.state.edited) {
	    var that = this;
	    var url = '/motors/'+that.state.selectedMotor.id+".json"
	    $.ajax({
	      method: 'PATCH',
	      data: {
	        motor: that.state.motor,
	      },
	      url: url,
	      success: function(res) {
	        that.setState({
	          motors: res,
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
		      	showEditMotorForm: false,
	          edited: false,
	          errors: {}
	        });
	      },
	      error: function(res) {
	        that.setState({
		      	showEditMotorForm: false,
	        });
	      }
	    });
	  }
	  else {
	  	this.setState ({
	  		showEditMotorForm: false,
	  	})
	  }
	},

	deleteMotor() {
    var that = this;
    var url = '/motors/'+this.state.selectedMotor.id+".json"
    $.ajax({
      method: 'DELETE',
      data: {
        motor: that.state.motor,
      },
      url: url,
      success: function(res) {
        that.setState({
          motors: res,
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
	      	showEditMotorForm: false,
	      	selectedMotor: {
						name: 'Motors'
					},
          errors: {}
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
	},

  isDisabled(){
    return ((this.state.showEditMotorForm) ? 'disabled' : '');
  },

	render() {
		motors = this.state.motors ? this.state.motors.map(function(motor) {
      return (
        <li key={motor.id} onClick={() => this.selectMotor(motor)}><a>{motor.name}</a></li>
      );
    }, this) : 'null';

		return (
			<div>
				<div id="motors">
					{ this.state.showNewMotorForm || this.state.showEditMotorForm ? null : <button type="button" className={'btn btn-success ' + this.isDisabled()} onClick={this.showNewMotorForm}>Add New Motor</button>}
					<br/> 
					<div className="btn-group">
					  { this.state.showNewMotorForm || this.state.showEditMotorForm ? null :
					  	<button type="button" className={'btn btn-default dropdown-toggle ' + this.isDisabled()} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    	{this.state.selectedMotor.name} <span className="caret"></span>
					  	</button>
					  }
					  <ul className="dropdown-menu">
						  {motors}
					  </ul>
					</div>
					{ this.state.selectedMotor.name === 'Motors' || this.state.showNewMotorForm || this.state.showEditMotorForm ? null : <button type="button" className="btn btn-default" onClick={this.showEditMotorForm}>Edit Motor</button> }
					<br/>
					{ this.state.showNewMotorForm ? <button type="button" className="btn btn-default" onClick={this.postMotor}>Add</button> : this.state.showEditMotorForm ? <button type="button" className="btn btn-default" onClick={this.updateMotor}>Done</button> : null }
					{ this.state.showNewMotorForm ? <button type="button" className="btn btn-default" onClick={()=>this.setState({showNewMotorForm:false, showEditMotorForm:false})}>Cancel</button> : null }
					{ this.state.showEditMotorForm ? <button type="button" className="btn btn-default" onClick={this.deleteMotor}>Delete</button> : null }
			  	<br/>
			  	{ this.state.showNewMotorForm ? <NewMotorForm key={'new'} handleNewMotor={this.handleNewMotor} /> : null }
			  	{ this.state.showEditMotorForm ? <EditMotorForm key={'edit'} handleEditMotor={this.handleEditMotor} motor={this.state.selectedMotor}/> : null }
				</div>
			</div>
		);
  	}
});