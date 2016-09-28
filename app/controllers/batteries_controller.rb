class BatteriesController < ApplicationController
	before_action :set_battery, only: [:show, :update, :destroy]

	def index
		@batteries = Battery.all
	end

	def create
		@battery = Battery.new(battery_params)

		if @battery.save
			render json: @battery
		else
			render json: { error: ('battery_create_error') }, status: :unprocessable_entity
		end
	end

	# PATCH/PUT /batteries/1
	def update
		if @battery.update(battery_params)
			@batteries = Battery.all
			render json: @batteries
		else
			render json: @battery.errors, status: :unprocessable_entity
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
