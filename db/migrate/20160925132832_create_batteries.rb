class CreateBatteries < ActiveRecord::Migration[5.0]
  def change
    create_table :batteries do |t|
      t.string :name
      t.float :voltage
      t.float :mass
      t.float :life_cycles
      t.float :amp_hours

      t.timestamps
    end
  end
end
