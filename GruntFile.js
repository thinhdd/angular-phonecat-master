'use strict';
var pkg = require('./package.json');

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({
        // Project settings
        bower: {
            install: {
                //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
                options: {
                    targetDir: './libs',
                    layout: 'byType',
                    install: true,
                    verbose: true,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {
                        forceLatest: true,    // Force latest version on conflict
                        production: true
                    }
                }
            }
        },
        clean: {
            before: {
                src: ['dist',
                    '.temp',
                    '.tmp'
                ]
            }
        },
        less: {
            production: {
                options: {
                },
                files: {
                    'app/styles/css/base/app-base.css': 'app/styles/less/base/app-base.less' ,
                    'app/styles/css/theme-lazy/app.css': 'app/styles/less/theme-lazy/app.less' ,
                    'app/styles/css/theme-trending/app.css' :'app/styles/less/theme-trending/app.less'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('build-production', [
        'less:compile'
    ]);

};
