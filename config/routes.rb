Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/users/123.json", {to: "application#show"}
  #get "/Health", {to: "application#index"}
  #get "topics/:name", to: "application#index"
  get "Home", {to: "application#index"}
  resources :topics, param: :name
  root({ :to => "application#index" })
  get({ "/(*path)" => "application#index", :format => :html })
end
