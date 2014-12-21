define([
  'underscore',
  'jquery',
], function(
  _,
  $
) {
  'use strict';
  return {
    start: function(id, data) {
      var xhr = $.ajax({
        type: 'post',
        url: '/dockerapi/containers/' + id + '/start',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({
          Id: id
        })
      });
      return xhr;
    }
  };
});
