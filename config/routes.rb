Rails.application.routes.draw do
  root 'homes#index'

  namespace :api, format: 'json' do
    resources :tasks, only: [:index, :create, :update]
  end

#以下はview-routerが効かないため一時的に置いている
  get 'homes/index'
  get 'homes/about'
  get 'homes/contact'
 end
