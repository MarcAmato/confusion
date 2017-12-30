'use strict'

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt);


    // Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
  };

// 'use strict'

// module.exports = function(grunt) {

//     //Load in Grunt plug-ins
//     require('time-grunt')(grunt);

//     require('jit-grunt')(grunt);

//     grunt.initConfig({
//         sass: {
//             dist:{
//                 files: {
//                     'css/styles.css':'css/styles.scss'
//                 }
//             }
//         },

//         watch: {
//             files: 'css/*.scss',
//             tasks: ['sass']
//         },

//         browserSync: {
//             dev: {
//                 bsFiles: {
//                     src: [
//                         'css/*.css',
//                         '*.html',
//                         'js/*.js'
//                     ]
//                 },
//                 options: {
//                     watchTask: true,
//                     server: {
//                         baseDir: './'
//                     }
//                 }
//             }
//         }
//     });

//     grunt.registerTask('css',['sass']);

//     grunt.registerTask('default', ['browserSync', 'watch']);
// }
