class CreateMotors < ActiveRecord::Migration[5.0]
  def change
    create_table :motors do |t|
      t.text :name
      t.float :mass
      t.integer :efficiency
      t.float :peak_power
      t.float :max_continuous_torque
      t.float :max_continuous_speed
      t.text :link
      t.float :cost
      t.text :notes

      t.timestamps
    end
  end
end