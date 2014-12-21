define([
  'backbone'
], function(
  Backbone
) {
  'use strict';
  return Backbone.Model.extend({
    url: function() {
      return '/dockerapi/images/' + this.id + '/json';
    }
  });
});  
