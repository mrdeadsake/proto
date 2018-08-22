class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :name
      t.string :guid
      t.timestamps
    end
    create_table :subtopics do |t|
      t.string :name
      t.integer :topic_id
      t.timestamps
    end
  end
end
