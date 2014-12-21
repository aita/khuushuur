define([
  'backbone',
  'backbone.marionette',
  'rivets',
  'App',
  'Controller'
], function(
  Backbone,
  Marionette,
  rivets,
  App,
  Controller
) {
  'use strict';
  rivets.binders['href'] = function(el, value) {
     el.setAttribute("href", value);
  };
  rivets.formatters.json = function(value) {
    return JSON.stringify(value);
  };
  rivets.adapters[':'] = {
    // set the listeners to update the corresponding DOM element
    subscribe: function(obj, keypath, callback) {
      if (obj instanceof Backbone.Collection) {
        obj.on('add remove reset', callback);
      }
      obj.on('change:' + keypath, callback);
    },

    // this will be triggered to unbind the Rivets.js events
    unsubscribe: function(obj, keypath, callback) {
      if (obj instanceof Backbone.Collection) {
        obj.off('add remove reset', callback);
      }
      obj.off('change:' + keypath, callback);
    },

    // define how Rivets.js should read the propery from our objects
    read: function(obj, keypath) {
      // if we use a collection we will loop through its models otherwise we just get the model properties
      return obj instanceof Backbone.Collection ? obj.models : obj.get(keypath);
    },

    // It gets triggered whenever we want update a model using Rivets.js
    publish: function(obj, keypath, value) {
      obj.set(keypath, value);
    }
  };
    
  App.appRouter = new Marionette.AppRouter({
    controller: new Controller(),
    appRoutes: {
      '': 'dashboardIndex',
      'containers': 'containersIndex',
      'containers/all': 'containersAll',
      'container/:id': 'containerIndex',
      'images': 'imagesIndex',
      'images/all': 'imagesAll',
      'image/:id': 'imageIndex'
    }
  });
  
  App.on("start", function() {
    Backbone.history.start();
  });
  
  App.start();    
});
