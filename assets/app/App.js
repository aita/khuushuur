define([
  'backbone.marionette'
], function(
  Marionette
) {
  'use strict';
  return new Marionette.Application({
    regions: {
      'content': '#content'
    }
  });
});
