define([
  'backbone'
], function(
  Backbone
) {
  'use strict';
  return Backbone.Model.extend({
    url: function() {
      return '/dockerapi/containers/' + this.id + '/json';
    },

    getImageUrl: function() {
      return '#/image/' + this.get('Image');
    }
  });
});  
