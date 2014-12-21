define([
  'App',
  'images/models/Image',
  'images/views/ImageView'
], function(
  App,
  Image,
  ImageView
) {
  'use strict';
  return {
    imageIndex: function(imageId) {
      var image = new Image({ id: imageId });
      image.fetch();
      
      App.content.show(new ImageView({
        model: image
      }));
    }
  };
});
