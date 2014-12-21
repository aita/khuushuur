define([
  'App',
  'images/collections/Images',
  'images/views/ImagesView'
], function(
  App,
  Images,
  ImagesView
) {
  'use strict';
  return {
    imagesIndex: function() {
      var images = new Images();
      images.fetch();

      App.content.show(new ImagesView({
        collection: images,
        showAll: false
      }));      
    },

    imagesAll: function() {
      var images = new Images();
      images.fetch({ data: { all: 1 }});

      App.content.show(new ImagesView({
        collection: images,
        showAll: true
      }));      
    }
  };
});  
