module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //watch  監看檔案
        watch: {
            css: {
                files: ['sass/*.scss', 'sass/**/*.scss','sass/**/*.css'],
                tasks: ['sass']
            },
            html: {
                files: ['*.html']
            },
            js: {
                files: ['js/*.js']
            }
        },
        //sass
        sass: {
            build: {
                options: {
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },
        //同步於瀏覽器
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        //來源檔案
                        'css/*.css',
                        '*.html',
                        'css/**/*.css',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: './',
                        index: 'index.html'
                    }
                }
            }
        },

    });

    //會用到三個套件
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');



    // define default task

    grunt.registerTask('default', ['browserSync','watch']);
    // grunt.registerTask('mini', ['cssmin']);
    // grunt.registerTask('copy', ['copy']);


};
