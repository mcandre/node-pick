module.exports = function(grunt) {
  grunt.initConfig({
		exec: {
      jshint: "jshint .",
      aspelllint: "bundle exec aspelllint"
		}
  });

  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("default", ["exec:jshint"]);
  grunt.registerTask("lint", ["exec:jshint"]);
  grunt.registerTask("aspelllint", ["exec:aspelllint"]);
};
