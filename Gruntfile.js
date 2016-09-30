module.exports = function(grunt) {
    var devWebpackConfig = require("./webpack.config.js");
    var _ = require('lodash');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // define a string to put between each file in the concatenated output
            options: {
                separator: ';'
            },
            dist: {
                src: ['bower_components/angular/angular.js',
                    'bower_components/restangular/src/restangular.js',
                    'bower_components/lodash/lodash.js',
                    'bower_components/bootstrap/dist/bootstrap.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'],
                dest: 'src/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'src/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    angular: true,
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },

        webpack: {
            dev: devWebpackConfig
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },

        connect: {
            options:{
                keepalive: true
            },
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    livereload:true,
                    base: 'src'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('hello', ['default','watch','connect']);
    grunt.registerTask('default', ['concat','webpack:dev', 'connect','watch']);

};