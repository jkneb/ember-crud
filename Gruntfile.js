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
    
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /assets\/js\/app\/templates\//
        },
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
          'assets/js/libs/handlebars-1.0.0.js',
          'assets/js/libs/ember-1.1.2.js',
          'assets/js/libs/ember-data-1.0.0-beta.3.js',
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
      emberTemplates: {
        files: 'assets/js/app/templates/**/*.hbs',
        tasks: ['emberTemplates']
      }, 
      concat: {
        files: ['assets/js/**/*.js', '!assets/js/app.js', '!assets/js/libs.js', '!assets/js/templates.js'],
        tasks: ['concat']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-templates');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'emberTemplates']);
};
