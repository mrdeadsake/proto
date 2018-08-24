class AddTopicToQuestions < ActiveRecord::Migration[5.2]
  def change
    add_column :questions, :topic_id, :string
  end
end
