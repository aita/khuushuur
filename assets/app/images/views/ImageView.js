define([
  'underscore',
  'jquery',
  'backbone.marionette',
  'rivets',
  'App',
  'text!templates/images/image.html',
], function(
  _,
  $,
  Marionette,
  rivets,
  App,
  html
) {
  'use strict';
  return Marionette.ItemView.extend({
    template: function() { return html; },

    onRender: function() {
      this.binding = rivets.bind(this.el, {
        model: this.model
      });
    },

    destroy: function() {
      this.binding.unbind();
    }
  });
});
