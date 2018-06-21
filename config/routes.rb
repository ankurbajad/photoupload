Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'upload_images#index'
  resources :upload_images do
    collection do 
      get :images
    end
  end
end
