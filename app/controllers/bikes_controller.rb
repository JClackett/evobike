class BikesController < ApplicationController
	before_action :set_bike, only: [:show, :update, :destroy]

	def index
		@bikes = Bike.all
	end

	def create	
		@bike = Bike.new(bike_params)

		if @bike.save
			render json: @bike
		else
			render json: { error: ('bike_create_error') }, status: :unprocessable_entity
		end
	end

	# PATCH/PUT /bikes/1
	def update
		if @bike.update(bike_params)
			@bikes = Bike.all
			render json: @bikes
		else
			render json: @bike.errors, status: :unprocessable_entity
		end
	end

	# DELETE /bikes/1
	def destroy
		@bike.destroy
		@bikes = Bike.all
		render json: @bikes
	end

	private

	def set_bike
		@bike = Bike.find(params[:id])
	end

	def bike_params
		params.require(:bike).permit(:id, :name, :dry_mass, :radius_wheel, :gear_ratio)
	end
		
end
