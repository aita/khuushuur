define([
  'App',
  'containers/models/Container',
  'containers/views/ContainerView'
], function(
  App,
  Container,
  ContainerView
) {
  'use strict';
  return {
    containerIndex: function(containerId) {
      var container = new Container({ id: containerId });
      container.fetch();
      App.content.show(new ContainerView({
        model: container
      }));
    }
  };
});
