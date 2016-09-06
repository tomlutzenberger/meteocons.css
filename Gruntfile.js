/*global module:false*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      less: {
        files: 'less/*.less',
        tasks: ['less']
      },
      html: {
        files: ['./*.pug', 'tests/*.pug'],
        tasks: ['pug']
      }
    },

    less: {
      development: {
        options: {},
        files: {
          "dist/meteocons.css": "less/meteocons.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "dist/meteocons.min.css": "less/meteocons.less"
        }
      }
    },

    pug: {
      release: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'index.pug',
          'tests/tests.html': 'tests/tests.pug'
        }
      }
    },

    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['dist/**/*.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['dist/**/*.css']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['pug', 'less']);
  grunt.registerTask('lint', ['csslint']);

};
