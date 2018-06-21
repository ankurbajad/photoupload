class Photo < ApplicationRecord
  has_attached_file :avatar,
          :default_url => "/assets/upload.png"
  validates_attachment :avatar,
             content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
end
