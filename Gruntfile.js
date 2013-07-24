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
          'assets/js/app/templates.js': 'assets/js/app/templates/**/*.hbs'
        }
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
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ember-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['sass','ember_handlebars']);
};
