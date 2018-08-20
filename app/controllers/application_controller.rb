class ApplicationController < ActionController::Base
  def index

  end

  def show
    render({:json=>{username: "derek"}})
  end
end
