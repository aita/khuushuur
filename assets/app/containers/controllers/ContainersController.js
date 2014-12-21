define([
  'App',
  'containers/collections/Containers',
  'containers/views/ContainersView'
], function(
  App,
  Containers,
  ContainersView
) {
  'use strict';
  return {
    containersIndex: function() {
      var containers = new Containers();
      containers.fetch();

      App.content.show(new ContainersView({
        collection: containers,
        showAll: false
      }));
    },

    containersAll: function() {
      var containers = new Containers();
      containers.fetch({ data: { all: 1 }});

      App.content.show(new ContainersView({
        collection: containers,
        showAll: true
      }));
    }
  };
});
