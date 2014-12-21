require.config({
  baseUrl: '/assets/app',
  deps: [
    'bootstrap'
  ],
  shim: {
    underscore: {
      exports: '_'
    },
    bootstrap: {
      deps: [
        'jquery'
      ]
    },
    backgrid: {
      deps: [
        'css!../vendor/backgrid/lib/backgrid'
      ],
      exports: 'Backgrid'
    },
    'backgrid-select-all': {
      deps: [
        'backgrid'
      ]
    },
    'backgrid-moment-cell': {
      deps: [
        'moment',
        'backgrid'
      ]
    },
    pnotify: {
      deps: [
        'css!../vendor/pnotify/pnotify.core'
      ]
    },
    nv: {
      deps: [
        'd3'
      ],
      exports: 'nv'
    },
    d3: {
      exports: 'd3'
    }
  },
  paths: {
    requirejs: '../vendor/requirejs/require',
    text: '../vendor/requirejs-text/text',
    css: '../vendor/require-css/css',
    'css-builder': '../vendor/require-css/css-builder',
    normalize: '../vendor/require-css/normalize',
    underscore: '../vendor/underscore/underscore',
    jquery: '../vendor/jquery/jquery',
    bootstrap: '../vendor/bootstrap/dist/js/bootstrap',
    backbone: '../vendor/backbone/backbone',
    'backbone.marionette': '../vendor/backbone.marionette/lib/core/backbone.marionette',
    'backbone.babysitter': '../vendor/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../vendor/backbone.wreqr/lib/backbone.wreqr',
    rivets: '../vendor/rivets/dist/rivets',
    'backbone.super': '../vendor/backbone.super/backbone-super/backbone-super',
    backgrid: '../vendor/backgrid/lib/backgrid',
    'backgrid-select-all': '../vendor/backgrid-select-all/backgrid-select-all',
    'backgrid-moment-cell': '../vendor/backgrid-moment-cell/backgrid-moment-cell',
    moment: '../vendor/moment/moment',
    pnotify: '../vendor/pnotify/pnotify.core',
    Chart: '../vendor/Chart.js/Chart.min',
    raphael: '../vendor/raphael/raphael',
    nv: '../vendor/nvd3/nv.d3',
    d3: '../vendor/d3/d3'
  },
  packages: [

  ]
});

require(['main']);
