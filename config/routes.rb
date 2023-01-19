Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
    namespace :api, defaults: {format: :json} do

      resources :users, only: [:create, :show] do
        resources :listings, only: [:index]
        resources :likes, only:[:index]
      end

      resource :session, only: [:create, :show, :destroy]
      
      resources :listings, only: [:index, :show, :create, :update]

      resources :likes, only: [:create, :destroy]
    end

      get '*path', to: "static_pages#frontend_index"
end

