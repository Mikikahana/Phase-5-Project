Rails.application.routes.draw do
  resources :breakdown_responders
  resources :breakdowns
  resources :responders, except: [:destroy]
  resources :dispatchers
  # get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'dispatcher#show'

end
