module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),
    
    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          'assets/css/style.css': 'assets/scss/style.scss'
        }
      }
    },
    
    ember_handlebars: {
      options: {
          processName: function(filePath) {
            var shortFilePath = filePath.replace(/assets\/js\/app\/templates\//, '').replace('.hbs', '');
            return shortFilePath;
          },
          processPartialName: function(filePath) {
            var shortFilePath = filePath.replace(/assets\/js\/app\/templates\//, '').replace('.hbs', '');
            return shortFilePath;
          }
      },
      compile: {
        files: {
          'assets/js/templates.js': 'assets/js/app/templates/**/*.hbs'
        }
      }
    },
    
    concat: {
      libs: {
        src: [
          'assets/js/libs/jquery-2.0.3.min.js', 
          'assets/js/libs/createUsersInLocalStorage.js',
          'assets/js/libs/handlebars-1.0.0.runtime.js',
          'assets/js/libs/ember-1.0.0-rc.7.js',
          'assets/js/libs/ember-data-latest.js',
          'assets/js/libs/localstorage_adapter.js',
          'assets/js/libs/moment.min.js'
        ],
        dest: 'assets/js/libs.js'
      },
      app: {
        src: 'assets/js/app/**/*.js',
        dest: 'assets/js/app.js'
      }
    },
    
    watch: {
      sass: {
        files: 'assets/scss/*.scss',
        tasks: ['sass']
      }, 
      ember_handlebars: {
        files: 'assets/js/app/templates/**/*.hbs',
        tasks: ['ember_handlebars']
      }, 
      concat: {
        files: ['assets/js/**/*.js', '!assets/js/app.js', '!assets/js/libs.js', '!assets/js/templates.js'],
        tasks: ['concat']
      }/*,
      karma: {
        files: ['assets/js/app.js','tests/unit/** /*'],
        tasks: ['karma:unit:run']
      }*/
    },

    karma: {
      unit: {
        configFile: 'conf/karma.unit.conf.js',
        background: true
      },
      integration: {
        configFile: 'conf/karma.integration.conf.js'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-handlebars');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'ember_handlebars']);
};
