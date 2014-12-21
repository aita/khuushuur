define([
  'underscore',
  'jquery',
  'backbone.marionette',
  'rivets',
  'App',
  'containers/actions',
  'text!templates/containers/container.html',
], function(
  _,
  $,
  Marionette,
  rivets,
  App,
  actions,
  template
) {
  'use strict';
  return Marionette.ItemView.extend({
    template: function() { return template; },

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
