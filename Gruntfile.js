module.exports = function(grunt) {

var getName = function(filePath) {
    var pieces = filePath.split("/");
    var filename = pieces[pieces.length - 1];
    return filename.replace('.hbs', '').replace(/-/g, '/');
}

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
            processName: getName,
            processPartialName: getName
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
