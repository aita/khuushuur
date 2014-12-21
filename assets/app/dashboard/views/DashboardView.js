define([
  'underscore',
  'jquery',
  'backbone.marionette',
  'nv',
  'd3',
  'App',
  'text!templates/dashboard/dashboard.html',
], function(
  _,
  $,
  Marionette,
  nv,
  d3,
  App,
  html
) {
  'use strict';
  return Marionette.ItemView.extend({
    template: function() { return html; },

    ui: {
      'chart': '#chart svg'
    },

    initialize: function() {
      this.listenTo(this.collection, 'reset', this.render);
    },

    onRender: function() {
      nv.addGraph(_.bind(function() {
        var chart = nv.models.pieChart()
            .x(function(d) { return d.label; })
            .y(function(d) { return d.value; })
            .labelType("percent")
            .donut(true)
            .donutRatio(0.35) 
            .showLabels(true);
      
        d3.select(this.ui.chart[0])
            .datum(this.getChartData())
            .transition().duration(350)
            .call(chart);
      
        return chart;
      }, this));
    },

    getChartData: function() {
      var running = 0,
          stopped = 0,
          ghost = 0;
      this.collection.each(function(container) {
        var status = container.get('Status');
        if (status == 'Ghost') {
          ghost += 1;
        } else if (status.indexOf('Exit') != -1) {
          stopped += 1;
        } else {
          running += 1;
        }
      });

      return[
        {
          value: running,
          label: 'Running'
        },
        {
          value: stopped,
          label: 'Stopped'
        },
        {
          value: ghost,
          label: 'Ghost'
        }
      ];
    }
  });
});
