module.exports = function(grunt){

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*buildinfo: {
            deploy: 'deploy',
            dist: 'dist',
            debug: false,
            temp: 'temp',
            env: 'local'
        },*/
        /*compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },*/
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        requirejs: {
            app: {
                options: {
                    findNestedDependencies: true,
                    mainConfigFile: './app/loader.js',
                    //baseUrl       : './app',
                    name          : 'jasper',
                    out           : '../jasper.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default',[
        'requirejs'
    ]);
};