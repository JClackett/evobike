class MotorsController < ApplicationController
	before_action :set_motor, only: [:show, :update, :destroy]

	def index
		@motors = Motor.all
		@batteries = Battery.all
		@bikes = Bike.all
	end

	def create
		@motor = Motor.new(motor_params)
		if @motor.save
			render json: @motor
		else
			render  json: { error: ('motor_create_error') }, status: :unprocessable_entity
		end
	end

	# PATCH/PUT /motors/1
	def update
		if @motor.update(motor_params)
			@motors = Motor.all
			render json: @motors
		else
			render json: @motor.errors, status: :unprocessable_entity
		end
	end

	# DELETE /motors/1
	def destroy
		@motor.destroy
		@motors = Motor.all
		render json: @motors
	end

	private

	def set_motor
		@motor = Motor.find(params[:id])
	end

	def motor_params
		params.require(:motor).permit(:id, :name, :mass, :efficiency, :peak_power, :max_continuous_torque, :max_continuous_speed, :link, :cost, :notes)
	end

end
