var Batteries = React.createClass({
	getInitialState() {
		return {
			batteries: this.props.batteries,
			showNewBatteryForm: false,
			showEditBatteryForm: false,
			selectedBattery: {
				name: 'Batteries'
			},
			edited: false,
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

	selectBattery(battery) {
		this.setState({
			selectedBattery: battery
		})
		this.props.handleBatterySelect(battery);
 	},

	showNewBatteryForm() {
		this.state.showNewBatteryForm ? this.setState({ showNewBatteryForm: false }) : this.setState({ showNewBatteryForm: true });
	},

	showEditBatteryForm() {
		this.setState({
			battery: this.state.selectedBattery,
		})
		this.state.showEditBatteryForm ? this.setState({ showEditBatteryForm: false }) : this.setState({ showEditBatteryForm: true });
	},

	handleNewBattery(data) {
		this.setState({
			battery: data.battery
		})
	},

	handleEditBattery(data) {
		this.setState({
			battery: data.battery,
			edited: true
		})
	},

	postBattery() {
    var that = this;
    $.ajax({
      method: 'POST',
      data: {
        battery: that.state.battery,
      },
      url: '/batteries.json',
      success: function(res) {
        var newBatteryList = that.state.batteries;
        newBatteryList.push(res);
        that.setState({
          batteries: newBatteryList,
          battery: {
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
	      	showNewBatteryForm: false,
          errors: {},
          edited: false
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
	},

	updateBattery() {
	  if (this.state.edited) {
	    var that = this;
	    var url = '/batteries/'+that.state.selectedBattery.id+".json"
	    $.ajax({
	      method: 'PATCH',
	      data: {
	        battery: that.state.battery,
	      },
	      url: url,
	      success: function(res) {
	        that.setState({
	          batteries: res,
	          battery: {
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
		      	showEditBatteryForm: false,
	          edited: false,
	          errors: {}
	        });
	      },
	      error: function(res) {
	        that.setState({
		      	showEditBatteryForm: false,
	        });
	      }
	    });
	  }
	  else {
	  	this.setState ({
	  		showEditBatteryForm: false,
	  	})
	  }
	},

	deleteBattery() {
    var that = this;
    var url = '/batteries/'+this.state.selectedBattery.id+".json"
    $.ajax({
      method: 'DELETE',
      data: {
        battery: that.state.battery,
      },
      url: url,
      success: function(res) {
        that.setState({
          batteries: res,
          battery: {
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
	      	showEditBatteryForm: false,
	      	selectedBattery: {
						name: 'Batteries'
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
    return ((this.state.showEditBatteryForm) ? 'disabled' : '');
  },

	render() {
		batteries = this.state.batteries ? this.state.batteries.map(function(battery) {
      return (
        <li key={battery.id} onClick={() => this.selectBattery(battery)}><a>{battery.name}</a></li>
      );
    }, this) : 'null';

		return (
			<div>
				<div id="batteries">
					{ this.state.showNewBatteryForm || this.state.showEditBatteryForm ? null : <button type="button" className={'btn btn-success ' + this.isDisabled()} onClick={this.showNewBatteryForm}>Add New Battery</button>}
					<br/> 
					<div className="btn-group">
					  { this.state.showNewBatteryForm || this.state.showEditBatteryForm ? null :
					  	<button type="button" className={'btn btn-default dropdown-toggle ' + this.isDisabled()} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    	{this.state.selectedBattery.name} <span className="caret"></span>
					  	</button>
					  }
					  <ul className="dropdown-menu">
						  {batteries}
					  </ul>
					</div>
					{ this.state.selectedBattery.name === 'Batteries' || this.state.showNewBatteryForm || this.state.showEditBatteryForm ? null : <button type="button" className="btn btn-default" onClick={this.showEditBatteryForm}>Edit Battery</button> }
					<br/>
					{ this.state.showNewBatteryForm ? <button type="button" className="btn btn-default" onClick={this.postBattery}>Add</button> : this.state.showEditBatteryForm ? <button type="button" className="btn btn-default" onClick={this.updateBattery}>Done</button> : null }
					{ this.state.showNewBatteryForm ? <button type="button" className="btn btn-default" onClick={()=>this.setState({showNewBatteryForm:false, showEditBatteryForm:false})}>Cancel</button> : null }
					{ this.state.showEditBatteryForm ? <button type="button" className="btn btn-default" onClick={this.deleteBattery}>Delete</button> : null }
			  	<br/>
			  	{ this.state.showNewBatteryForm ? <NewBatteryForm key={'new'} handleNewBattery={this.handleNewBattery} /> : null }
			  	{ this.state.showEditBatteryForm ? <EditBatteryForm key={'edit'} handleEditBattery={this.handleEditBattery} battery={this.state.selectedBattery}/> : null }
				</div>
			</div>
		);
  	}
});