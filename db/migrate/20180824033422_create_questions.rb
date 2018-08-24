class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :guid
      t.string :text
      t.integer :user_id
      t.timestamps
    end

    create_table :answers do |t|
      t.string :guid
      t.string :text
      t.integer :user_id
      t.integer :question_id
      t.timestamps
    end
  end
end
