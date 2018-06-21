class UploadImagesController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]

  def index
  end

  def images
    images = []
    Photo.all.each do |photo|
      images << photo.avatar.url
    end
    render json: images
  end

  def create
    photo = Photo.new
    photo.avatar = params[:file]
    if photo.save
      render json: {image: photo.avatar.url, status: :ok}
    else
      render json: {error: photo.errors.full_messages, status: 404}
    end
  end

end
