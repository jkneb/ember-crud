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

    handlebars: {
      compile: {
        options: {
          namespace: "App.TEMPLATES"
        },
        files: {
          'assets/js/app/templates.js': 'assets/js/app/templates/*/**.hbs'
        }
      }
    },
    
    watch: {
      sass: {
        files: 'assets/scss/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  // Default task(s).
  grunt.registerTask('default', ['sass','handlebars']);
};
