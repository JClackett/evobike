class BikesController < ApplicationController
  before_action :set_bike, only: [:show, :update, :destroy]

  def index
    	@batteries = Bike.all
  end

  def create
    @bike = Bike.new(bike_params)
  	respond_to do |format|
			format.json do 
      		if @bike.save
        			render :json => @bike
      		else
        			render :json => { :errors => @bike.errors.messages }, :status => 422
      		end
    		end
  	end
  end

  # PATCH/PUT /batteries/1
  def update
    if @bike.update_attributes(bike_params)
      @batteries = Bike.all
      render json: @batteries
    else
      render json: @batteries
    end
  end

  # DELETE /batteries/1
  def destroy
    @bike.destroy
    @batteries = Bike.all
    render json: @batteries
  end

  private

    def set_bike
      @bike = Bike.find(params[:id])
    end

  	def bike_params
  		params.require(:bike).permit(:id, :name, :dry_mass, :radius_wheel, :gear_ratio)
  	end
		
end
