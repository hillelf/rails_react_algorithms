Rails.application.routes.draw do
  root 'static#index'
  get 'algorithms/index'
end
