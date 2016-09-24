class MotorsController < ApplicationController

	def home
      	@motors = Motor.all
      	render component: 'Home', props: { motors: @motors }
    end

	def index
      	@motors = Motor.all
      	render component: 'Motors', props: { motors: @motors }
    end

    def create
  	    @motor = Motor.new(motor_params)
    	respond_to do |format|
  			format.json do 
        		if @motor.save
          			render :json => @motor
        		else
          			render :json => { :errors => @motor.errors.messages }, :status => 422
        		end
      		end
    	end
	end

    private

		def motor_params
			params.require(:motor).permit(:name, :mass, :efficiency, :peak_power, :max_continuous_torque, :max_continuous_speed, :link, :cost, :notes)
		end
		
end
