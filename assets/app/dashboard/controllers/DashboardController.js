define([
  'App',
  'containers/collections/Containers',
  'dashboard/views/DashboardView'
], function(
  App,
  Containers,
  DashboardView
) {
  'use strict';
  return {
    'dashboardIndex': function() {
      var containers = new Containers();
      containers.fetch({
          reset: true,
          data: { all: 1 }
      });

      App.content.show(new DashboardView({
        collection: containers
      }));
    }
  };
});
