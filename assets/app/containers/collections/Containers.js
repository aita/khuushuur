define([
  'backbone'
], function(
  Backbone
) {
  'use strict';  
  return Backbone.Collection.extend({
    url: '/dockerapi/containers/json'
  });
});
