define([
  'underscore',
  'jquery',
  'backbone.marionette',
  'backgrid',
  'App',
  'containers/actions',
  'khuushuur/backgrid/cells',
  'khuushuur/backgrid/formatters',
  'text!templates/containers/containers.html',
  'backgrid-select-all',
  'backgrid-moment-cell'
], function(
  _,
  $,
  Marionette,
  Backgrid,
  App,
  actions,
  cells,
  formatters,
  html
) {
  'use strict';
  return Marionette.LayoutView.extend({
    template: function() { return html; },

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

    regions: {
      gridWrapper: '#grid-wrapper'
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
        cell: cells.ContainerIdCell,
        formatter: formatters.IdFormatter,
        editable: false
      },
      {
        name: 'Image',
        label: 'Image',
        cell: 'string',
        editable: false
      }, 
      {
        name: 'Command',
        label: 'Command',
        cell: 'string',
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
      },
      {
        name: 'Status',
        lable: 'Status',
        cell: 'string',
        editable: false
      },
      {
        name: 'Names',
        lable: 'Names',
        cell: 'string',
        formatter: formatters.CommaFormatter,
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
    },

    onClickedReload: function() {
      this.collection.fetch({
        reset: true,
        data: { all: this.showAll ? 1 : 0 }
      });
    },

    onClickedAll: function() {
      this.showAll = !this.showAll;

      var route = this.showAll ? 'containers/all' : 'containers';
      App.appRouter.navigate(route);

      this.collection.fetch({
        reset: true,
        data: { all: this.showAll ? 1 : 0 }
      });
    }
  });
});
