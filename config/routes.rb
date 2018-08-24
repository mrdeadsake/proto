Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/users/123.json", {to: "application#show"}
  get "Home", {to: "application#index"}
  resources :topics, param: :name
  scope(path_names: {new: 'new'}) do
    resources :subtopics, param: :name, path: "topics"
  end

  resources :questions
  resources :answers
  resources :users
  root({ :to => "application#index" })
  get({ "/(*path)" => "application#index", :format => :html })
end
