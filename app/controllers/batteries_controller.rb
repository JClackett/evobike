class BatteriesController < ApplicationController
  before_action :set_battery, only: [:show, :update, :destroy]

  def index
    	@batteries = Battery.all
  end

  def create
    @battery = Battery.new(battery_params)
  	respond_to do |format|
			format.json do 
      		if @battery.save
        			render :json => @battery
      		else
        			render :json => { :errors => @battery.errors.messages }, :status => 422
      		end
    		end
  	end
  end

  # PATCH/PUT /batteries/1
  def update
    if @battery.update_attributes(battery_params)
      @batteries = Battery.all
      render json: @batteries
    else
      render json: @batteries
    end
  end

  # DELETE /batteries/1
  def destroy
    @battery.destroy
    @batteries = Battery.all
    render json: @batteries
  end

  private

    def set_battery
      @battery = Battery.find(params[:id])
    end

  	def battery_params
  		params.require(:battery).permit(:id, :name, :voltage, :mass, :life_cycles, :amp_hours)
  	end
		
end
