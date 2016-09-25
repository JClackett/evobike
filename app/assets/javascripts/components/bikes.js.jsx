var Bikes = React.createClass({
	getInitialState() {
		return {
			bikes: this.props.bikes,
			showNewBikeForm: false,
			showEditBikeForm: false,
			selectedBike: {
				name: 'Bikes'
			},
			edited: false,
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

	selectBike(bike) {
		this.setState({
			selectedBike: bike
		})
 	},

	showNewBikeForm() {
		this.state.showNewBikeForm ? this.setState({ showNewBikeForm: false }) : this.setState({ showNewBikeForm: true });
	},

	showEditBikeForm() {
		this.setState({
			bike: this.state.selectedBike,
		})
		this.state.showEditBikeForm ? this.setState({ showEditBikeForm: false }) : this.setState({ showEditBikeForm: true });
	},

	handleNewBike(data) {
		this.setState({
			bike: data.bike
		})
	},

	handleEditBike(data) {
		this.setState({
			bike: data.bike,
			edited: true
		})
	},

	postBike() {
    var that = this;
    $.ajax({
      method: 'POST',
      data: {
        bike: that.state.bike,
      },
      url: '/bikes.json',
      success: function(res) {
        var newBikeList = that.state.bikes;
        newBikeList.push(res);
        that.setState({
          bikes: newBikeList,
          bike: {
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
	      	showNewBikeForm: false,
          errors: {},
          edited: false
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
	},

	updateBike() {
	  if (this.state.edited) {
	    var that = this;
	    var url = '/bikes/'+that.state.selectedBike.id+".json"
	    $.ajax({
	      method: 'PATCH',
	      data: {
	        bike: that.state.bike,
	      },
	      url: url,
	      success: function(res) {
	        that.setState({
	          bikes: res,
	          bike: {
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
		      	showEditBikeForm: false,
	          edited: false,
	          errors: {}
	        });
	      },
	      error: function(res) {
	        that.setState({
		      	showEditBikeForm: false,
	        });
	      }
	    });
	  }
	  else {
	  	this.setState ({
	  		showEditBikeForm: false,
	  	})
	  }
	},

	deleteBike() {
    var that = this;
    var url = '/bikes/'+this.state.selectedBike.id+".json"
    $.ajax({
      method: 'DELETE',
      data: {
        bike: that.state.bike,
      },
      url: url,
      success: function(res) {
        that.setState({
          bikes: res,
          bike: {
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
	      	showEditBikeForm: false,
	      	selectedBike: {
						name: 'Bikes'
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
    return ((this.state.showEditBikeForm) ? 'disabled' : '');
  },

	render() {
		bikes = this.state.bikes ? this.state.bikes.map(function(bike) {
      return (
        <li key={bike.id} onClick={() => this.selectBike(bike)}><a>{bike.name}</a></li>
      );
    }, this) : 'null';

		return (
			<div>
				<div id="bikes">
					{ this.state.showNewBikeForm || this.state.showEditBikeForm ? null : <button type="button" className={'btn btn-success ' + this.isDisabled()} onClick={this.showNewBikeForm}>Add New Bike</button>}
					<br/> 
					<div className="btn-group">
					  { this.state.showNewBikeForm || this.state.showEditBikeForm ? null :
					  	<button type="button" className={'btn btn-default dropdown-toggle ' + this.isDisabled()} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    	{this.state.selectedBike.name} <span className="caret"></span>
					  	</button>
					  }
					  <ul className="dropdown-menu">
						  {bikes}
					  </ul>
					</div>
					{ this.state.selectedBike.name === 'Bikes' || this.state.showNewBikeForm || this.state.showEditBikeForm ? null : <button type="button" className="btn btn-default" onClick={this.showEditBikeForm}>Edit Bike</button> }
					<br/>
					{ this.state.showNewBikeForm ? <button type="button" className="btn btn-default" onClick={this.postBike}>Add</button> : this.state.showEditBikeForm ? <button type="button" className="btn btn-default" onClick={this.updateBike}>Done</button> : null }
					{ this.state.showNewBikeForm ? <button type="button" className="btn btn-default" onClick={()=>this.setState({showNewBikeForm:false, showEditBikeForm:false})}>Cancel</button> : null }
					{ this.state.showEditBikeForm ? <button type="button" className="btn btn-default" onClick={this.deleteBike}>Delete</button> : null }
			  	<br/>
			  	{ this.state.showNewBikeForm ? <NewBikeForm key={'new'} handleNewBike={this.handleNewBike} /> : null }
			  	{ this.state.showEditBikeForm ? <EditBikeForm key={'edit'} handleEditBike={this.handleEditBike} bike={this.state.selectedBike}/> : null }
				</div>
			</div>
		);
  	}
});