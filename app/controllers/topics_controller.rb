class TopicsController < ApplicationController
  def index
    topics=Topic.all.map{|topic| {topic: topic, subtopics: topic.subtopics}}


    render({:json=>{topics: topics}})
  end

  def show

  end
end
