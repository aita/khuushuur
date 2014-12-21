define([
  'underscore',
  'jquery',
  'backbone.marionette',
  'backgrid',
  'App',
  'khuushuur/backgrid/cells',
  'khuushuur/backgrid/formatters',
  'text!templates/images/images.html',
  'backgrid-select-all',
  'backgrid-moment-cell'
], function(
  _,
  $,
  Marionette,
  Backgrid,
  App,
  cells,
  formatters,
  html
) {
  'use strict';
  return Marionette.LayoutView.extend({
    template: function() { return html; },

    regions: {
      gridWrapper: '#grid-wrapper'
    },

    ui: {
      'action': 'a.action',
      'reload': 'button.reload',
      'all': 'button.all'
    },

    events: {
      'click @ui.action': 'onClickedAction',
      'click @ui.reload': 'onClickedReload',
      'click @ui.all': 'onClickedAll'
    },

    columns: [
      {
        name: '',
        cell: 'select-row',
        headerCell: 'select-all'
      },
      {
        name: 'Id',
        label: 'Id',
        cell: cells.ImageIdCell,
        formatter: formatters.IdFormatter,
        editable: false
      },
      {
        name: 'RepoTags',
        label: 'Repository',
        cell: 'string',
        formatter: formatters.CommaFormatter,
        editable: false
      }, 
      {
        name: 'Created',
        lable: 'Created',
        cell: Backgrid.Extension.MomentCell.extend({
          modelInUnixTimestamp: true,  
          displayFormat: 'YYYY/MM/DD H:mm:ss',
          displayInUTC: false
        }),
        editable: false
      }
    ],

    initialize: function(options) {
      this.showAll = options.showAll;
    },

    onRender: function() {
      this.ui.all.toggleClass('active', this.showAll);

      this.grid = new Backgrid.Grid({
        columns: this.columns,
        collection: this.collection
      });
      this.gridWrapper.show(this.grid);
    },

    onClickedAction: function(ev) {
      /* TODO
      var action = $(ev.target).data('action');
      var selectedContainers = this.grid.getSelectedModels();

      var actionFunc = actions[action];
      if (!_.isFunction(actionFunc)) {
        throw Error('Unknown container action: ' + action);
      }
      _.each(selectedContainers, function(container) {
        var containerId = container.get('Id');
        actionFunc(containerId, { id: containerId });
      });
      return false;
       */
    },

    onClickedReload: function() {
      this.collection.fetch({
        reset: true,
        data: { all: this.showAll ? 1 : 0 }
      });
    },

    onClickedAll: function() {
      this.showAll = !this.showAll;

      var route = this.showAll ? 'images/all' : 'images';
      App.appRouter.navigate(route);

      this.collection.fetch({
        reset: true,
        data: { all: this.showAll ? 1 : 0 }
      });
    }
  });
});
