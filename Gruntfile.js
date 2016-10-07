module.exports = function(grunt) {
    var devWebpackConfig = require("./webpack.config.js");
    var _ = require('lodash');

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('test', ['karma:specs']);
    grunt.registerTask('hello', ['default','watch','connect']);

    grunt.registerTask('default', ['concat','webpack:dev','less:compile', 'connect','watch']);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            // define a string to put between each file in the concatenated output
            options: {
                separator: ';'
            },
            dist: {
                src: ['bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/restangular/src/restangular.js',
                    'bower_components/lodash/dist/lodash.js',
                    'bower_components/bootstrap/dist/bootstrap.min.js',
                    'bower_components/angular-bootstrap/ui-bootstrap.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/jquery/dist/jquery.js'
                ],
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
        less:{
        compile: {
            options: {
                paths: ['test/fixtures/include']
            },
            files: {
                'src/application.css': 'src/index.less',
                // 'tmp/less.css': ['test/fixtures/style.less'],
                // 'tmp/concat.css': ['test/fixtures/style.less', 'test/fixtures/style2.less', 'test/fixtures/style3.less']
            },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        }}},

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
        karma: {
         specs: {
             configFile: './karma.conf.js'
         }
        }

    });



};