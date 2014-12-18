'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'handlebars'

module.exports = function(grunt) {

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        buildInfo: {
            app: 'app',
            dist: 'dist'
        },
        watch: {
            options: {},
            compass: {
                files: ['../scss/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            }
        },
        clean: {
            dist: ['.tmp', '<%= buildInfo.dist %>/*']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= buildInfo.app %>/{,*/}*.js'
            ]
        },
        compass: {
            options: {
                sassDir: '../scss',
                cssDir: '../',
                imagesDir: '../images',
                javascriptsDir: '<%= buildInfo.app %>',
                fontsDir: '<%= buildInfo.app %>/styles/fonts',
                importPath: '<%= buildInfo.app %>/bower_components',
                relativeAssets: true
            },
            dist: {}
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    baseUrl: '<%= buildInfo.app %>',
                    dir: '<%= buildInfo.dist %>',
                    modules: [{
                        name: "loader"
                    }, {
                        name: "main"
                    }],
                    optimize: 'uglify',
                    mainConfigFile: '<%= buildInfo.app %>/loader.js',
                    paths: {
                        'templates': '../../templates',
                        // 'jquery': '../../<%= yeoman.app %>/bower_components/jquery/dist/jquery',
                        // 'underscore': '../../<%= yeoman.app %>/bower_components/underscore/underscore',
                        // 'backbone': '../../<%= yeoman.app %>/bower_components/backbone/backbone'
                    },
                    /* SUPPRESS console.log() CALLS DURING UGLIFICATION */
                    // onBuildWrite: function (moduleName, path, contents) {
                    //      return contents.replace(/console.log(.*);/g, '');
                    // },
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    removeCombined: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        useminPrepare: {
            html: '<%= buildInfo.app %>/index.html',
            options: {
                dest: '<%= buildInfo.dist %>'
            }
        },
        usemin: {
            html: ['<%= buildInfo.dist %>/{,*/}*.html'],
            css: ['<%= buildInfo.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%= buildInfo.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '../images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '../images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= buildInfo.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= buildInfo.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/buildInfo/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= buildInfo.app %>',
                    src: '*.html',
                    dest: '<%= buildInfo.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= buildInfo.app %>',
                    dest: '<%= buildInfo.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'
                    ]
                }]
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= buildInfo.app %>/loader.js'
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= buildInfo.dist %>/scripts/{,*/}*.js',
                        '<%= buildInfo.dist %>/styles/{,*/}*.css'
                    ]
                }
            }
        }
    });

    grunt.registerTask('build', [
        'clean:dist',
        'compass:dist',
        'useminPrepare',
        'requirejs',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};