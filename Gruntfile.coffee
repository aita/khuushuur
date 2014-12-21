module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-bower-requirejs'

  grunt.initConfig
    bower:     
      app:
        rjsConfig: 'assets/khuushuur.js'
        options:
          baseUrl: 'assets/app'
          transitive: true
          exclude: [
            'requirejs-text',
            'pnotify',
            'require-handlebars-plugin'
          ]
