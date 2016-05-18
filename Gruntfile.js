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
		},

		// less task
		less: {
			development: {
				options: { },
				files: {
					"dist/meteocons.css": "less/meteocons.less",
					"dist/meteocons.min.css": "less/meteocons.less"
				}
			}
		}
	});

	// load and register tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['less']);

};
