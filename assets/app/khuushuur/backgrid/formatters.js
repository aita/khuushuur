define([
  'underscore',
  'backgrid'
], function(
  _,
  Backgrid
) {
  'use strict';
  return {
    IdFormatter: _.extend({}, Backgrid.CellFormatter.prototype, {
      fromRaw: function (id) {
        return id.substr(0, 12);
      }
    }),

    CommaFormatter: _.extend({}, Backgrid.CellFormatter.prototype, {
      fromRaw: function (values) {
        return _.map(values, function(value) {
          if (value[0] == '/') {
            value = value.substr(1);
          }
          return value;
        }).join(',');
      }
    })
  };
});
