define([
  'underscore',
  'backgrid'
], function(
  _,
  Backgrid
) {
  'use strict';
  return {
    ContainerIdCell: Backgrid.UriCell.extend({
      target: null,
        
      render: function () {
        this.$el.empty();
        var rawValue = this.model.get(this.column.get("name"));
        var formattedValue = this.formatter.fromRaw(rawValue, this.model);
        this.$el.append($("<a>", {
          tabIndex: -1,
          href: '#/container/' + rawValue,
          title: this.title || formattedValue,
          target: this.target
        }).text(formattedValue));
        this.delegateEvents();
        return this;
      }        
    }),

    ImageIdCell: Backgrid.UriCell.extend({
      target: null,
        
      render: function () {
        this.$el.empty();
        var rawValue = this.model.get(this.column.get("name"));
        var formattedValue = this.formatter.fromRaw(rawValue, this.model);
        this.$el.append($("<a>", {
          tabIndex: -1,
          href: '#/image/' + rawValue,
          title: this.title || formattedValue,
          target: this.target
        }).text(formattedValue));
        this.delegateEvents();
        return this;
      }        
    })
  };
});
