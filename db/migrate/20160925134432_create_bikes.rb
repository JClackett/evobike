class CreateBikes < ActiveRecord::Migration[5.0]
  def change
    create_table :bikes do |t|
      t.string :name
      t.float :dry_mass
      t.float :radius_wheel
      t.float :gear_ratio

      t.timestamps
    end
  end
end
