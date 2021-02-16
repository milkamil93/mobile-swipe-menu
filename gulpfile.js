'use strict';

const
    pkg = require("./package.json"),
    banner = [
        '/**',
        ' * @package        ${pkg.name}',
        ' * @version        ${pkg.version}',
        ' * @description    ${pkg.description}',
        ' * @author         ${pkg.author}',
        ' * @copyright      ${new Date().getFullYear()} ${pkg.name}',
        ' * @license        ${pkg.license}',
        ' * @link           ${pkg.homepage}',
        '*/'
    ].join('\n'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    through = require('through2'),
    header = require('gulp-header'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    webpackStream = require('webpack-stream'),
    browserSync = require('browser-sync').create()
;

function js(release = false) {
    release = release === true;
    return gulp.src('./src/js/app.js')
        .pipe(webpackStream({
            devtool: release ? false : 'source-map',
            mode: release ? 'production' : 'development',
            output: {
                filename: release
                    ? 'mobile-swipe-menu.min.js'
                    : 'mobile-swipe-menu.js',
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /\.node_modules$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: [
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-proposal-class-properties'
                                ]
                            }
                        }
                    }
                ]
            },

        }))
        .pipe(gulpif(!release, sourcemaps.init({loadMaps: true})))
        .pipe(through.obj(function (file, enc, cb) {
            const isSourceMap = /\.map$/.test(file.path);
            if (!isSourceMap) this.push(file);
            cb();
        }))
        .pipe(gulpif(release, uglify()))
        .pipe(header(banner, {pkg: pkg}))
        .pipe(gulpif(!release, sourcemaps.write('.')))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.stream());
}

function serve() {
    browserSync.init({server:'./dist'});
    gulp.watch('./src/js/*.js', gulp.series('js'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

exports.js = js;
exports.serve = serve;

gulp.task('default', gulp.series(
    gulp.parallel(js, serve)
));

gulp.task('release', async function () {
    js(true);
});