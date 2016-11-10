Rails.application.routes.draw do
  devise_for :users
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  get '/:locale' => 'welcome#index'
  scope "(:locale)", locale: /en|ru/ do
    root to: 'welcome#index'
  end
end
