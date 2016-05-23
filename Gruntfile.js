module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// watch task
		watch: {
			// observe all *.less files, execute less task on change and reload the site
			less: {
				files: 'less/*.less',
				tasks: ['less'],
				options: {},
			},
			html: {
				files: ['./*.pug', 'tests/*.pug'],
				tasks: ['pug'],
				options: {},
			}
		},

		// less task
		less: {
			development: {
				options: { },
				files: {
					"dist/meteocons.css": "less/meteocons.less",
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

		// pug task
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
		}
	});

	// load and register tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-pug');

	grunt.registerTask('default', ['less']);

};
